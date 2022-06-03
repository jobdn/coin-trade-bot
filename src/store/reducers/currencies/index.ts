import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICurrency, ICurrencyState } from "../../../models/CurrenciesState";

const initialState: ICurrencyState = {
  currencies: [],
  error: "",
  isLoading: false,
};

export const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    fetchCurrenciesSuccess(state, action: PayloadAction<ICurrency[]>) {
      state.currencies = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    setCurrenciesIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setCurrenciesError(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setCurrenciesIsLoading,
  setCurrenciesError,
  fetchCurrenciesSuccess,
} = currenciesSlice.actions;

export default currenciesSlice.reducer;
