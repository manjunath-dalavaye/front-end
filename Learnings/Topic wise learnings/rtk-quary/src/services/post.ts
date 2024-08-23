//How to create a API service 

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => 'posts', // No need to specify `method: 'GET'` as GET is default.
    }),
  }),
});


//end point name getAllPost and (use capital G and Query)
//getAllPost and Query will be from above code
export const { useGetAllPostQuery } = postApi;
