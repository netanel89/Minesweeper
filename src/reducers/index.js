import { combineReducers } from "redux";
import config from "./configReducer";
import board from "./boardReducer";
import game from "./gameReducer";

export default () =>
  combineReducers({
    board,
    config,
    game
  });
