import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { createApi } from '@reduxjs/toolkit/query/react';
import { UsersResponse, GetUsersRequest } from './types';

enum Tags {
  Users = 'users',
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_USERS_URL,
  }),
  tagTypes: Object.values(Tags),
  endpoints: (builder) => ({
    getUsers: builder.query<UsersResponse, GetUsersRequest>({
      query: ({ page, pageSize }) =>
        `/?page=${page}&results=${pageSize}&seed=EjwjkrDGVB`,
      providesTags: [Tags.Users],
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
