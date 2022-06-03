import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import authReducer from "./reducers/auth";
import currenciesReducer from "./reducers/currencies";

const rootReducer = combineReducers({
  auth: authReducer,
  currencies: currenciesReducer,
});

export const store = configureStore({ reducer: rootReducer });

export type StoreType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
