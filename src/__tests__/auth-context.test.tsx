import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "@jest/globals"
import "@testing-library/jest-dom"

// mock correto do router do Next
jest.mock("next/navigation", () => ({
  __esModule: true,
  useRouter: () => ({
    push: jest.fn(),
    refresh: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
}))

import { AuthProvider, useAuth } from "@/context/AuthContext"

function TestComponent() {
  const { user } = useAuth()

  return <div>{user ? user.email : "sem usuário"}</div>
}

describe("AuthContext", () => {

  it("fornece usuário inicial", () => {
    const user = {
      id: "1",
      name: "Aluno",
      email: "aluno@authtask.dev"
    }

    render(
      <AuthProvider initialUser={user}>
        <TestComponent />
      </AuthProvider>
    )

    expect(screen.getByText("aluno@authtask.dev")).toBeInTheDocument()
  })

  it("renderiza sem usuário quando initialUser é null", () => {
    render(
      <AuthProvider initialUser={null}>
        <TestComponent />
      </AuthProvider>
    )

    expect(screen.getByText("sem usuário")).toBeInTheDocument()
  })

})