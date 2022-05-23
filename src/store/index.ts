import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import authReducer from "./reducers/auth";

const rootReducer = combineReducers({ auth: authReducer });

export const store = configureStore({ reducer: rootReducer });

export type StoreType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
