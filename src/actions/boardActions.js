import {
  CELL_CLICKED,
  GAME_OVER,
  CELL_MARKED,
  NO_MORE_FLAGS
} from "../common/actionsTypes";

export const onCellClick = id => {
  return {
    type: CELL_CLICKED,
    payload: id
  };
};

export const onCellMarked = id => {
  return {
    type: CELL_MARKED,
    payload: id
  };
};

export const setNoMoreFlags = () => {
  return {
    type: NO_MORE_FLAGS
  };
};

export const onGameOver = id => {
  return {
    type: GAME_OVER,
    payload: id
  };
};
