export interface Task {
  id: number;
  name: string;
  description: string;
  completed: boolean;
  status: string;
}

export interface TaskState {
  tasks: Task[];
}
