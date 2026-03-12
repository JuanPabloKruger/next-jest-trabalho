import { describe, it, expect } from "@jest/globals";
import { authenticate } from "@/services/auth/auth.service";

describe("AuthService", () => {

  it("deve autenticar usuário com credenciais corretas", async () => {
    const result = await authenticate({
      email: "aluno@authtask.dev",
      password: "123456",
    });

    expect(result).toHaveProperty("user");
    expect(result.user.email).toBe("aluno@authtask.dev");
  });

  it("deve falhar com senha inválida", async () => {
    await expect(
      authenticate({
        email: "aluno@authtask.dev",
        password: "senha_errada",
      })
    ).rejects.toThrow();
  });

  it("deve falhar quando email é inválido", async () => {
    await expect(
      authenticate({
        email: "",
        password: "123456",
      })
    ).rejects.toThrow();
  });

  it("deve falhar quando senha é vazia", async () => {
    await expect(
      authenticate({
        email: "aluno@authtask.dev",
        password: "",
      })
    ).rejects.toThrow();
  });

  it("deve retornar estrutura de usuário correta", async () => {
    const result = await authenticate({
      email: "aluno@authtask.dev",
      password: "123456",
    });

    expect(result.user).toHaveProperty("id");
    expect(result.user).toHaveProperty("name");
    expect(result.user).toHaveProperty("email");
  });

});