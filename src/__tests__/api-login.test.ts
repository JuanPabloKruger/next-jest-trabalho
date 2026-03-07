/**
 * @jest-environment node
 */

import { POST } from "@/app/api/login/route";
import {
  authenticate,
  validateLoginPayload,
  hasValidationErrors,
} from "@/services/auth/auth.service";
import {
  createSessionToken,
  getSessionCookieOptions,
} from "@/services/auth/session.service";

jest.mock("@/services/auth/auth.service");
jest.mock("@/services/auth/session.service");

describe("POST /api/login", () => {

  const mockRequest = (body: any) =>
    new Request("http://localhost/api/login", {
      method: "POST",
      body: JSON.stringify(body),
    });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("retorna 400 quando dados inválidos", async () => {
    (validateLoginPayload as jest.Mock).mockReturnValue({ email: "erro" });
    (hasValidationErrors as jest.Mock).mockReturnValue(true);

    const response = await POST(mockRequest({}));

    expect(response.status).toBe(400);
  });

  it("retorna 200 quando login é válido", async () => {
    const fakeUser = {
      id: "1",
      name: "Aluno",
      email: "aluno@authtask.dev",
    };

    (validateLoginPayload as jest.Mock).mockReturnValue({});
    (hasValidationErrors as jest.Mock).mockReturnValue(false);

    (authenticate as jest.Mock).mockResolvedValue({
      user: fakeUser,
    });

    (createSessionToken as jest.Mock).mockReturnValue("token");

    (getSessionCookieOptions as jest.Mock).mockReturnValue({
      name: "session",
      cookieOptions: {},
    });

    const response = await POST(
      mockRequest({
        email: "aluno@authtask.dev",
        password: "123456",
      })
    );

    expect(response.status).toBe(200);
  });

});