import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsersState } from "../../../models/IUser";

const initialState: IUsersState = {
  users: [
    {
      id: 1047797083,
      username: "nice_arti",
      name: "Nice Arti",
      role: "admin",
      blacklisted: false,
    },
    {
      id: 1954189782,
      username: "DyrkavTemke",
      name: "Тёмка",
      role: 100,
      blacklisted: false,
    },
    {
      id: 5234015190,
      username: "Irina",
      name: "IRINA Cravcenco",
      role: "tester",
      blacklisted: false,
    },
    {
      id: 710195310,
      username: "Igorterzi",
      name: "Igor Terzi",
      role: 100,
      blacklisted: false,
    },
    {
      id: 718115489,
      username: "Ks8292",
      name: "Daşa",
      role: 100,
      blacklisted: false,
    },
    {
      id: 893853307,
      username: "apm1002",
      name: "Misha Cheban",
      role: "admin",
      blacklisted: false,
    },
    {
      id: 1445811334,
      username: "PeaceAreOff",
      name: "Данила",
      role: 100,
      blacklisted: false,
    },
    {
      id: 5092983503,
      username: "imcursedgod",
      name: "disorder",
      role: "tester",
      blacklisted: false,
    },
  ],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserStatus(
      state,
      action: PayloadAction<{ id: number; newStatus: string }>
    ) {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return { ...user, role: action.payload.newStatus };
        }
        return user;
      });
    },

    deleteUser(state, action: PayloadAction<number>) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { setUserStatus, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
