import { render, screen } from "@testing-library/react";
import { ServerTaskSummary } from "@/components/dashboard/ServerTaskSummary";
import { taskService } from "@/services/tasks/task.service";
import "@testing-library/jest-dom";

// 1. Mock do serviço de tarefas
jest.mock("@/services/tasks/task.service", () => ({
  taskService: {
    getSummary: jest.fn(),
  },
}));

describe("ServerTaskSummary", () => {
  const userId = "user-123";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renderiza os dados de resumo corretamente quando a busca tem sucesso", async () => {
    (taskService.getSummary as jest.Mock).mockResolvedValue({
      total: 5,
      completed: 2,
      pending: 3,
    });

    const ResolvedComponent = await ServerTaskSummary({ userId });
    render(ResolvedComponent);

    expect(taskService.getSummary).toHaveBeenCalledWith(userId);

    // ERRO PROPOSITAL
    expect(screen.getByText("999")).toBeInTheDocument();
  });

  it("renderiza mensagem de erro quando o serviço falha", async () => {
    (taskService.getSummary as jest.Mock).mockRejectedValue(new Error("API Error"));

    const ResolvedComponent = await ServerTaskSummary({ userId });
    render(ResolvedComponent);

    expect(screen.getByText(/Resumo indisponível/i)).toBeInTheDocument();
    expect(screen.queryByText("5")).not.toBeInTheDocument();
  });
});