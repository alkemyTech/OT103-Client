import { useDispatch } from "react-redux";
import {
  validateAuth,
  getUserInfo,
  logout,
  registerUser,
} from "../slices/authSlice";

/**
 * Auth custom hook manipulator, try to use only this hook to manipulate the auth state.
 * @author Julian Kominovic
 * @function
 * @name useAuthActions
 * @returns  Actions to modify the authSlice
 *
 */

const useAuthActions = () => {
  const dispatch = useDispatch();

  /**
   * Function that validates user data.
   * @author Julian Kominovic
   * @name useAuthActions
   * @param {string} email User email
   * @param {string} password User password
   * @function
   * @async
   *
   */
  const validateUserLogin = async (email, password) => {
    await dispatch(validateAuth({ email: email, password: password }));
    await dispatch(getUserInfo());
  };

  /**
   * Function to logout. Clears the auth store.
   * @author Julian Kominovic
   * @name useAuthActions
   * @function
   *
   */
  const logginOut = () => {
    dispatch(logout());
  };

  /**
   * Function to register a new user.
   * @author Julian Kominovic
   * @name useAuthActions
   * @function
   * @param {Object} registrationData User name, password and email.
   * @param {string} registrationData.email User email
   * @param {string} registrationData.name User name
   * @param {string} registrationData.password User password
   *
   */
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
