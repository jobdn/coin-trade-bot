import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICoin, ICoinsState } from "../../../models/CoinsState";

const initialCoinsState: ICoinsState = {
  coins: [],
  error: "",
  isLoading: false,
  search: "",
};

export const coinsSlice = createSlice({
  name: "coins",
  initialState: initialCoinsState,
  reducers: {
    startFetchCoins(state, action: PayloadAction<string>) {
      state.isLoading = true;
      state.search = action.payload;
    },
    fetchCoinsSuccess(state, action: PayloadAction<ICoin[]>) {
      state.coins = action.payload;
      state.isLoading = false;
    },
    fetchCoinsError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { startFetchCoins, fetchCoinsSuccess, fetchCoinsError } =
  coinsSlice.actions;
export default coinsSlice.reducer;
