import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Task interface with optional description
interface Task {
  description?: string; // Made optional
  id: number;
  content: string;
  completed: boolean;
}

// State interface containing a list of tasks
interface TaskState {
  tasks: Task[];
}

// Initial state with an empty task list
const initialState: TaskState = {
  tasks: [],
};

// Task slice with various reducers
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // Reducer for adding a task
    addTask(state, action: PayloadAction<{ content: string; description?: string }>) {
      const newTask: Task = {
        id: Date.now(),
        content: action.payload.content,
        description: action.payload.description, // Optional description
        completed: false,
      };
      state.tasks.push(newTask);
    },

    // Reducer for updating a task's content
    updateTask(state, action: PayloadAction<{ id: number; content: string }>) {
      const { id, content } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.content = content;
      }
    },

    // Reducer for removing a task by ID
    removeTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },

    // Reducer for toggling a task's completed state
    toggleTask(state, action: PayloadAction<number>) {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

// Exporting the actions
export const { addTask, updateTask, removeTask, toggleTask } = taskSlice.actions;

// Exporting the reducer
export default taskSlice.reducer;
