import * as actionTypes from '../types/actionTypes';
import { Task } from '../types/taskTypes';

export const addTask = (newTask: Task): actionTypes.TaskActionTypes => ({
  type: actionTypes.ADD_TASK,
  payload: newTask,
});

export const updateTaskStatus = (taskId: number, selectedStatus: string): actionTypes.TaskActionTypes => ({
  type: actionTypes.UPDATE_TASK_STATUS,
  payload: { taskId, selectedStatus },
});
