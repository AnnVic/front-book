import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type RootState } from 'store/store.ts';

type LoginInitialState = {
  token: string | null;
};

export const initialState: LoginInitialState = {
  token: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setCredentials: (
      state: LoginInitialState,
      action: PayloadAction<LoginInitialState>,
    ) => {
      state.token = action.payload.token;
    },
    unsetCredentials: (state: LoginInitialState) => {
      state.token = null;
    },
  },
});

export const { setCredentials, unsetCredentials } = loginSlice.actions;
export default loginSlice.reducer;

export const selectLoginAccessToken = (state: RootState) => state.login.token;
