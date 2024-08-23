import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
} from './actionTypes';

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: { text },
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const markCompleted = (id: number) => ({
  type: MARK_COMPLETED, 
  payload: { id },
});

export const markIncomplete = (id: number) => ({
  type: MARK_INCOMPLETE,
  payload: { id },
});

export const filterTodos = (filter: 'ALL' | 'COMPLETED' | 'INCOMPLETE') => ({
  type: FILTER_TODOS,
  payload: { filter },
});

export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

export const updateSearchTerm = (searchTerm: string) => ({
  type: UPDATE_SEARCH_TERM,
  payload: { searchTerm },
});
