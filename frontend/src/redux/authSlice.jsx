import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:8000/api/accounts/login/", credentials);
    dispatch(setUser({ user: response.data.user, token: response.data.token }));
  } catch (error) {
    console.error("Login failed:", error);
  }
};

export default authSlice.reducer;