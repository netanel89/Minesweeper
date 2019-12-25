import {
  INIT_GAME,
  SET_SUPERMAN_MODE,
  GAME_DONE,
  GAME_LOADING,
  SET_TEMP_MESSAGE
} from "../common/actionsTypes";
import { SCREEN_NO_MORE_FLAGS } from "../common/constants";

export const resetGame = config => {
  return {
    type: INIT_GAME,
    payload: config
  };
};
export const setSupermanMode = () => {
  return {
    type: SET_SUPERMAN_MODE
  };
};

export const setGameDone = () => {
  return {
    type: GAME_DONE
  };
};

export const setGameLoading = bool => {
  return {
    type: GAME_LOADING,
    payload: bool
  };
};

export const setNoMoreFlagsNot = () => dispatch => {
  dispatch({
    type: SET_TEMP_MESSAGE,
    payload: SCREEN_NO_MORE_FLAGS
  });
  setTimeout(() => {
    dispatch({
      type: SET_TEMP_MESSAGE
    });
  }, 4000);
};
