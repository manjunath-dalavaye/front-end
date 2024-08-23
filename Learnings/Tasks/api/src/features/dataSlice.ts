// src/features/dataSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Post, AppState } from '../types';
import { fetchPosts } from '../api/api';

const initialState: AppState = {
  loading: false,
  data: [],
  error: null,
};

export const fetchData = createAsyncThunk<Post[]>(
  'data/fetchData',
  async () => {
    const posts = await fetchPosts();
    return posts;
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default dataSlice.reducer;
