import type { IUser } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  users: IUser[];
}
const initialState: InitialState = {
  users: [
    {
      id: "4bbf6d8a-333b-463b-8de5-7e5c3026d27e",
      name: "djakl",
    },
  ],
};
type DraftUser = Pick<IUser, "name">;
const createUser = (userData: DraftUser): IUser => {
  return {
    id: crypto.randomUUID(),
    ...userData,
  };
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(createUser(action.payload));
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const userToUpdate = state.users.find(
        (user) => user.id === action.payload.id
      );
      if (userToUpdate) {
        userToUpdate.name = action.payload.name;
      }
    },
  },
});
export const selectUsers = (state: { user: InitialState }) => {
  return state.user.users;
};
export const { addUser, deleteUser, updateUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
