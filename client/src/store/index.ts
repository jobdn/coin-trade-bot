import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import authReducer from "./reducers/auth";
import coinsReducer from "./reducers/coins";
import usersReducer from "./reducers/users";
import coinsApiSlice from "../services/cryptosApi";

const rootReducer = combineReducers({
  auth: authReducer,
  coins: coinsReducer,
  users: usersReducer,
  [coinsApiSlice.reducerPath]: coinsApiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware().concat(coinsApiSlice.middleware),
});

export type StoreType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
