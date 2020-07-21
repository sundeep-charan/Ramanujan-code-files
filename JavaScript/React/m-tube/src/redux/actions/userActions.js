import { SET_USER, TOGGLE_AUTH_STATE, LOGOUT_USER } from "../actionTypes";

export const setUser = user => {
  return {
    type: SET_USER,
    payload: user
  };
};

export const logOutUser = () => {
  return {
    type: LOGOUT_USER
  };
};

export const toggleIsAuthenticating = () => {
  return {
    type: TOGGLE_AUTH_STATE
  };
};
