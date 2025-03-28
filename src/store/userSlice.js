import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    email: "",
    uid: null,
    userInfo: {},
    cart:{},
  },
  reducers: {
    setCurrentUser(state, action) {
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },

    setCart(state, action) {
      state.cart = action.payload;
    },
  },
});

export const userActions = user.actions;
export const userReducer = user.reducer;
