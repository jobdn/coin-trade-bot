import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthState {
  user: string;
  isAuth: boolean;
  isAdmin: boolean;
  error: string | null;
  isLoading: boolean;
}

const initialState: IAuthState = {
  user: "",
  isAuth: false,
  isAdmin: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    successAuth(state, action: PayloadAction<string>) {
      state.user = action.payload;
      state.isLoading = false;
      state.isAuth = true;
    },
    errorAuth(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setAdmin(state, action: PayloadAction<boolean>) {
      state.isAdmin = action.payload;
    },
  },
});

export const { errorAuth, setIsLoading, setError, successAuth, setAdmin } =
  authSlice.actions;
export default authSlice.reducer;
