import { LOG_IN, LOG_OUT } from "../actionTypes";

export const logIn = user => {
  return {
    type: LOG_IN,
    payload: user
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT
  };
};
