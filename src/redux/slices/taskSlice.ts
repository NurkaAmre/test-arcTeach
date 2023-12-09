import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: number;
  name: string;
  description: string;
  completed: boolean;
  status: string;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const taskId = action.payload;
      const taskToToggle = state.tasks.find((task) => task.id === taskId);
      if (taskToToggle) {
        taskToToggle.completed = !taskToToggle.completed;
      }
    },
  },
});

export const { addTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
