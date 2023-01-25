import { RootState } from "..";

export const selectUsers = (state: RootState) => state.users.users;
export const selectParams = (state: RootState) => state.users.params;
export const selectTotalPages = (state: RootState) => state.users.totalPages;
