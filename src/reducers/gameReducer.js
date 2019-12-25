import {
  GAME_OVER_STATUS,
  GAME_DONE_STATUS,
  GAME_PLAYING_STATUS
} from "../common/constants";
import {
  GAME_OVER,
  INIT_GAME,
  GAME_DONE,
  GAME_LOADING,
  SET_SUPERMAN_MODE,
  CELL_MARKED,
  SET_TEMP_MESSAGE
} from "../common/actionsTypes";
import initialState from "../store/initialState";

export default (state = initialState.game, action) => {
  switch (action.type) {
    case INIT_GAME:
      return {
        ...state,
        status: GAME_PLAYING_STATUS,
        markedCells: initialState.game.markedCells,
        loading: true
      };
    case GAME_OVER:
      return {
        ...state,
        status: GAME_OVER_STATUS
      };
    case GAME_DONE:
      return {
        ...state,
        status: GAME_DONE_STATUS
      };
    case GAME_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SET_SUPERMAN_MODE:
      return {
        ...state,
        isSuperman: state.isSuperman ? false : true
      };
    case CELL_MARKED: {
      const existingIndex = state.markedCells.indexOf(action.payload);
      const result = [...state.markedCells];
      if (existingIndex > -1) {
        result.splice(existingIndex, 1);
      } else {
        result.push(action.payload);
      }
      return {
        ...state,
        markedCells: result
      };
    }
    case SET_TEMP_MESSAGE: {
      return {
        ...state,
        tempMessage: action.payload
      };
    }
    default:
      return state;
  }
};
