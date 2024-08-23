import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of your user state
interface UserState {
  user: {
    id: string;
    username: string;
    email: string;
  } | null;
  token: string | null;
}

// Initial state
const initialState: UserState = {
  user: null,
  token: null,
};

// Create the user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: any; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

// Export actions and reducer
export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
