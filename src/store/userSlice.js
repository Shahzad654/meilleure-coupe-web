import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    email: "",
    uid: null,
  },
  reducers: {
    setCurrentUser(state, action) {
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },
  },
});

export const userActions = user.actions;
export const userReducer = user.reducer;
