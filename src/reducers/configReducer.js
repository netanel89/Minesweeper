import { SET_CONFIG, INIT_GAME } from "../common/actionsTypes";
import initialState from "../store/initialState";

export default (state = initialState.config, action) => {
  switch (action.type) {
    case INIT_GAME:
    case SET_CONFIG:
      return action.payload;
    default:
      return state;
  }
};
