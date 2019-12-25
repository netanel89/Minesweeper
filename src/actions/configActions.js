import { SET_CONFIG, SET_SUPERMAN_MODE } from "../common/actionsTypes";

export const setConfig = config => {
  return {
    type: SET_CONFIG,
    payload: config
  };
};

export const setSupermanMode = () => {
  return {
    type: SET_SUPERMAN_MODE
  };
};
