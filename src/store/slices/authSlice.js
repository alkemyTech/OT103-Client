import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../Services/privateApiService";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    userName: "",
    userEmail: "",
  },
  reducers: {
    validateAuth: async (state, action) => {
      const userData = action.payload;
      const response = await Post("login", userData).catch((err) =>
        console.log(err)
      );
      if (response.data.token) {
        console.log("hay token");
        console.log(response.data);
        return { ...state, isAuth: true };
      }
      return { ...state, isAuth: false };
    },
  },
});

export const { validateAuth } = authSlice.actions;
export default authSlice.reducer;
