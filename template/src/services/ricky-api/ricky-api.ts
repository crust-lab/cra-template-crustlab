import { createApi } from '@reduxjs/toolkit/query/react';
import rickyApiPaths from './ricky-api-paths';
import { CharactersResponse } from './ricky-api-types';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

enum Tags {
  Characters = 'characters',
}

export const rickyApi = createApi({
  reducerPath: 'rickyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_RICKY_API_URL,
  }),
  tagTypes: Object.values(Tags),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<CharactersResponse, void>({
      query: () => rickyApiPaths.characters,
      providesTags: [Tags.Characters],
    }),
  }),
});

export const { useGetAllCharactersQuery } = rickyApi;
