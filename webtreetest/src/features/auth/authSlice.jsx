import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    UserEmail: null,
  },
  reducers: {
    loggedin: (state, action) => {
      state.UserEmail = action.payload;
    },
    loggedout: (state) => {
      state.UserEmail = null;
    },
  },
});

export const { loggedin, loggedout } = authSlice.actions;
export default authSlice.reducer;
