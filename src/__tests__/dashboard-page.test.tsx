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
    // Configura o mock para retornar dados de sucesso
    (taskService.getSummary as jest.Mock).mockResolvedValue({
      total: 5,
      completed: 2,
      pending: 3,
    });

    // Resolve o componente assíncrono antes de renderizar
    const ResolvedComponent = await ServerTaskSummary({ userId });
    render(ResolvedComponent);

    // Verificações
    expect(taskService.getSummary).toHaveBeenCalledWith(userId);
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("renderiza mensagem de erro quando o serviço falha", async () => {
    // Configura o mock para simular uma falha (rejeição)
    (taskService.getSummary as jest.Mock).mockRejectedValue(new Error("API Error"));

    const ResolvedComponent = await ServerTaskSummary({ userId });
    render(ResolvedComponent);

    // Verifica se a mensagem de fallback definida no enunciado aparece
    expect(screen.getByText(/Resumo indisponível/i)).toBeInTheDocument();
    
    // Garante que os números não apareçam em caso de erro (opcional, mas boa prática)
    expect(screen.queryByText("5")).not.toBeInTheDocument();
  });
});