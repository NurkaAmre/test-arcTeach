import { combineReducers } from '@reduxjs/toolkit';
import tasksReducer from './taskSlice';
import completedTasksReducer from './completedTasksSlice';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  completedTasks: completedTasksReducer,
});

export default rootReducer;
