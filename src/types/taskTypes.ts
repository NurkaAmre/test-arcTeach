import { ADD_TASK, UPDATE_TASK_STATUS } from "./actionTypes";

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

export type TaskActionTypes =
  | { type: typeof ADD_TASK; payload: Task }
  | { type: typeof UPDATE_TASK_STATUS; payload: { taskId: number; selectedStatus: string } };
