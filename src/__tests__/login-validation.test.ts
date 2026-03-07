import { describe, it, expect } from "@jest/globals"

import { validateLoginInput } from "@/services/auth/validation"

describe("Login validation", () => {

  it("deve aceitar credenciais válidas", () => {
    const result = validateLoginInput({
      email: "aluno@authtask.dev",
      password: "123456"
    })

    expect(result).toEqual({
      email: "aluno@authtask.dev",
      password: "123456"
    })
  })

  it("deve falhar se email estiver vazio", () => {
    expect(() =>
      validateLoginInput({
        email: "",
        password: "123456"
      })
    ).toThrow()
  })

  it("deve falhar se senha estiver vazia", () => {
    expect(() =>
      validateLoginInput({
        email: "aluno@authtask.dev",
        password: ""
      })
    ).toThrow()
  })

})