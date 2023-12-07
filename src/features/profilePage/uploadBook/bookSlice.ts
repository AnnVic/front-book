import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store.ts';

export type BookType = {
  title: string;
  coverImage: ArrayBuffer;
};

export type BooksInitialState = {
  books: BookType[] | null;
};

const initialState: BooksInitialState = {
  books: null,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (
      state: BooksInitialState,
      action: PayloadAction<BooksInitialState>,
    ) => {
      state.books = action.payload.books;
    },
  },
});
export const { setBooks } = booksSlice.actions;

export default booksSlice.reducer;
export const selectBooks = (state: RootState) => state.books;
