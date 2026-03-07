import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import LoginForm from "@/components/login-form"

describe("LoginForm", () => {

  it("renderiza campos de email e senha", () => {
    render(<LoginForm />)

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument()
  })

  it("permite digitar no formulário", async () => {
    const user = userEvent.setup()

    render(<LoginForm />)

    const email = screen.getByLabelText(/email/i)
    const password = screen.getByLabelText(/senha/i)

    await user.type(email, "teste@email.com")
    await user.type(password, "123456")

    expect(email).toHaveValue("teste@email.com")
    expect(password).toHaveValue("123456")
  })

})