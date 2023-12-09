import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CompletedTasksState {
  completedTasks: string[];
}

const initialState: CompletedTasksState = {
  completedTasks: [],
};

const completedTasksSlice = createSlice({
  name: 'completedTasks',
  initialState,
  reducers: {
    addCompletedTask: (state, action: PayloadAction<string>) => {
      state.completedTasks.push(action.payload);
    },
  },
});

export const { addCompletedTask } = completedTasksSlice.actions;
export default completedTasksSlice.reducer;
