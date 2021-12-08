import { useDispatch } from "react-redux";
import {
  validateAuth,
  getUserInfo,
  logout,
  registerUser,
} from "../slices/authSlice";

const useAuthActions = () => {
  const dispatch = useDispatch();

  const validateUserLogin = async (email, password) => {
    await dispatch(validateAuth({ email: email, password: password }));
    await dispatch(getUserInfo());
  };

  const logginOut = () => {
    dispatch(logout());
  };

  const registerUserData = (registrationData) => {
    dispatch(registerUser(registrationData));
  };

  return {
    validateUserLogin,
    logginOut,
    registerUserData,
  };
};
export default useAuthActions;
