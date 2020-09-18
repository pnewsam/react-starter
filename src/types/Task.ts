export interface Task {
  id: string;
  text?: string;
  completed: boolean;
}

export interface CompleteTaskPayload {
  task: Task;
}
