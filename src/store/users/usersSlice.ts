import { createSlice } from "@reduxjs/toolkit";
import IUser from "models/User";
import UsersAsync from "./usersAsync";

interface IState {
  users: IUser[] | null;
  totalPages: number;
  params: {
    page: number;
    count: number,
  }
}

const initialState: IState = {
  users: null,
  totalPages: 0,
  params: {
    page: 1,
    count: 6,
  }
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      // fetch users
      .addCase(UsersAsync.fetchUsers.pending, (state, action) => {
        state.params = action.meta.arg;
      })
      .addCase(UsersAsync.fetchUsers.fulfilled, (state, action) => {
        state.users = state.users ? [...state.users, ...action.payload.users] : action.payload.users;
        state.totalPages = action.payload.total_pages;
      })
      // create user
      .addCase(UsersAsync.createUser.fulfilled, (state, action) => {
        state.users = state.users
          ? state.params.page === state.totalPages ? [action.payload, ...state.users] : [action.payload, ...state.users.slice(0, -1)]
          : [action.payload];
      })
  }
})

export const usersActions = usersSlice.actions;
export default usersSlice.reducer;