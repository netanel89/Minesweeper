import { GAME_PLAYING_STATUS } from "../common/constants";

export default {
  config: {
    width: 8,
    height: 3,
    mines: 5
  },
  board: [],
  game: {
    status: GAME_PLAYING_STATUS,
    isSuperman: false,
    markedCells: [],
    loading: false,
    tempMessage: ""
  }
};
