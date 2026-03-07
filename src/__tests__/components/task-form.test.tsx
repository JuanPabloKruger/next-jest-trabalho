import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import TaskForm from "@/components/task-form"

describe("TaskForm", () => {

  it("renderiza campo de nova tarefa", () => {
    render(<TaskForm />)

    expect(screen.getByPlaceholderText(/nova tarefa/i)).toBeInTheDocument()
  })

  it("permite digitar uma tarefa", async () => {
    const user = userEvent.setup()

    render(<TaskForm />)

    const input = screen.getByPlaceholderText(/nova tarefa/i)

    await user.type(input, "Estudar Jest")

    expect(input).toHaveValue("Estudar Jest")
  })

})