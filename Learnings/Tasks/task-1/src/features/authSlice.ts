import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      state.user = action.payload.username;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem('user', action.payload.username);
      localStorage.setItem('token', action.payload.token);
    },
    login: (state, action) => {
      const { username, password } = action.payload;
      const storedUser = localStorage.getItem('user');
      const storedToken = localStorage.getItem('token');

      if (storedUser === username) {
        state.user = storedUser;
        state.token = storedToken;
        state.isAuthenticated = true;
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
  },
});

export const { register, login, logout } = authSlice.actions;

export default authSlice.reducer;
