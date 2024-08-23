// src/api/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../components/apiConfig';

export const apiSlice = createApi({
  reducerPath: 'api',  // Specifies the key for the API slice in the store
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),  // Sets the base URL for all API requests
  endpoints: () => ({}),  // Placeholder for adding endpoints
});

export const { useGetUsersQuery } = apiSlice;
