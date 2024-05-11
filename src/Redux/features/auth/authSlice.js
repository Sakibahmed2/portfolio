import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  password: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { email, password } = action.payload;
      state.email = email;
      state.password = password;
    },
    logOut: (state) => {
      state.email = null;
      state.password = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;
