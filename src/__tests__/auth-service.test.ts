import { describe, it, expect } from "@jest/globals"

import { authenticate } from "@/services/auth/auth.service";

describe("AuthService", () => {

  it("deve autenticar usuário com credenciais corretas", async () => {

    const result = await authenticate({
      email: "aluno@authtask.dev",
      password: "123456"
    })

    expect(result).toHaveProperty("user")
    expect(result.user.email).toBe("aluno@authtask.dev")

  })

  it("deve falhar com senha inválida", async () => {

    await expect(
      authenticate({
        email: "aluno@authtask.dev",
        password: "senha_errada"
      })
    ).rejects.toThrow()

  })

})