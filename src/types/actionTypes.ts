import { Task } from './taskTypes';

export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK_STATUS = 'UPDATE_TASK_STATUS';

export type TaskActionTypes =
  | { type: typeof ADD_TASK; payload: Task }
  | { type: typeof UPDATE_TASK_STATUS; payload: { taskId: number; selectedStatus: string } };
