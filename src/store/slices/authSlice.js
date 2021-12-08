import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../Services/publicApiService";
import { Get } from "../../Services/privateApiService";

// ASYNC THUNK FUNCTIONS
const validateAuth = createAsyncThunk("auth/validateAuth", async (userData) => {
  const response = await Post("login", userData).catch((err) =>
    console.log(err)
  );
  return response;
});

const getUserInfo = createAsyncThunk("auth/getUserInfo", async () => {
  const response = await Get("auth/me").catch((err) => console.log(err));
  return response;
});

const registerUser = createAsyncThunk(
  "auth/register",
  async (registrationData) => {
    const response = await Post("register", registrationData).catch((err) =>
      console.log(err)
    );
    return response;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    id: 0,
    userName: "",
    userEmail: "",
    token: "",
  },
  reducers: {
    logout: (state) => {
      return {
        ...state,
        isAuth: false,
        id: 0,
        userName: "",
        userEmail: "",
        token: "",
      };
    },
  },
  extraReducers: (builder) => {
    // ASYNC ACTIONS DOWN BELOW

    // ASYNC THUNK REGISTER USER
    builder.addCase(registerUser.fulfilled, (state, action) => {
      const { name, email, id } = action.payload.data.user;
      const token = action.payload.data.token;

      return {
        ...state,
        isAuth: true,
        userEmail: email,
        userName: name,
        id: id,
        token: token,
      };
    });

    builder.addCase(registerUser.rejected, (state) => {
      return { ...state, isAuth: false };
    });

    // ASYNC THUNK GET USER INFO CASES
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      const response = action.payload;

      if (!response.success) {
        return { ...state, isAuth: false };
      }
      const { id, name, email } = response.data.user;
      return {
        ...state,
        isAuth: true,
        userEmail: email,
        userName: name,
        id: id,
      };
    });
    builder.addCase(getUserInfo.rejected, (state, action) => {
      return {
        ...state,
        isAuth: false,
      };
    });

    //   ASYNC THUNK VALIDATION CASES
    builder.addCase(validateAuth.fulfilled, (state, action) => {
      const response = action.payload;

      if (response["error"] === "No token") {
        return { ...state, isAuth: false, token: "" };
      }
      localStorage.setItem("token", response.data.token);

      return {
        ...state,
        isAuth: true,
        token: response.data.token,
      };
    });
    builder.addCase(validateAuth.rejected, (state, action) => {
      return { ...state, isAuth: false, token: "" };
    });
  },
});

export { validateAuth, getUserInfo, registerUser };
export const { logout } = authSlice.actions;
export default authSlice.reducer;
