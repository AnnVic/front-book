import { createApi } from '@reduxjs/toolkit/query/react';
import { OptionType } from 'features/profilePage/uploadBook/customSelect/types.ts';
import { baseQuery } from 'services/baseApiService.ts';
import { BookType } from 'features/profilePage/uploadBook/bookSlice.ts';

export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    postBook: builder.mutation({
      query: (book) => ({
        url: '/api/Books',
        method: 'POST',
        body: book,
      }),
    }),
    postAuthors: builder.mutation({
      query: (author) => ({
        url: '/Authors',
        method: 'POST',
        body: author,
      }),
    }),
    getGenres: builder.query<OptionType[], void>({
      query: () => '/Genres',
    }),
    getAuthors: builder.query<OptionType[], void>({
      query: () => '/Authors',
    }),
    getBooks: builder.query({
      query: (page) => `/api/Books?page=${page}`,
    }),
    getBookById: builder.query<BookType, string>({
      query: (title) => `/api/Book/${title}`,
    }),
  }),
});

export const {
  usePostBookMutation,
  usePostAuthorsMutation,
  useGetGenresQuery,
  useGetAuthorsQuery,
  useGetBooksQuery,
  useGetBookByIdQuery,
  reducer,
  reducerPath,
  middleware: bookMiddleware,
} = bookApi;
