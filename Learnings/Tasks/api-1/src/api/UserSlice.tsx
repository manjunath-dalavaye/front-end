// src/api/usersApi.ts
import { apiSlice } from './apiSlice';
import { User } from '../types/user';

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => '/users',  // Defines the endpoint for fetching users
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
