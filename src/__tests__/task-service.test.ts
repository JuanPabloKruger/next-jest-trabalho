import { buildTaskService, validateTaskTitle } from "@/services/tasks/task.service";

describe("TaskService", () => {

  const repositoryMock = {
    listByUser: jest.fn(),
    createForUser: jest.fn(),
    updateCompletion: jest.fn(),
    deleteForUser: jest.fn(),
  };

  const taskService = buildTaskService({
    repository: repositoryMock
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("deve validar título corretamente", () => {
    expect(validateTaskTitle("Minha tarefa")).toBe("Minha tarefa");
  });

  it("deve lançar erro quando título é vazio", () => {
    expect(() => validateTaskTitle("")).toThrow();
  });

  it("deve criar tarefa corretamente", async () => {

    repositoryMock.createForUser.mockResolvedValue({
      id: "1",
      title: "Nova tarefa",
      completed: false,
      userId: "user1"
    });

    const result = await taskService.createTask({
      userId: "user1",
      title: "Nova tarefa"
    });

    expect(result.title).toBe("Nova tarefa");
  });

});