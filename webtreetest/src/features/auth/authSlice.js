import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    UserEmail: null,
    UserFullname: null,
  },
  reducers: {
    loggedin: (state, action) => {
      const{myemail,myfullname}=action.payload;
      state.UserEmail = myemail;
      state.UserFullname = myfullname;
     // state.UserEmail = action.payload.email;
     // state.UserFullname = action.payload.fullname;
    },
    loggedout: (state) => {
      state.UserEmail = null;
      state.UserFullname = null;
    },
  },
});

export const { loggedin, loggedout } = authSlice.actions;
export default authSlice.reducer;
