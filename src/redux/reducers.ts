import * as actionTypes from '../types/actionTypes';
import { TaskState } from '../types/taskTypes';

const initialState: TaskState = {
  tasks: [],
};

const taskReducer = (state = initialState, action: actionTypes.TaskActionTypes): TaskState => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case actionTypes.UPDATE_TASK_STATUS:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId ? { ...task, status: action.payload.selectedStatus } : task
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
