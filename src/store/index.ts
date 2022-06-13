import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import authReducer from "./reducers/auth";
import coinsReducer from "./reducers/coins";
import usersReducer from "./reducers/users";

const rootReducer = combineReducers({
  auth: authReducer,
  coins: coinsReducer,
  users: usersReducer,
});

export const store = configureStore({ reducer: rootReducer });

export type StoreType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
