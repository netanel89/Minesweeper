import { CELL_MARKED } from "../common/actionsTypes";
import { setGameDone } from "../actions/gameActions";
import { getCell } from "../reducers/boardReducer";

// game done middleware to dispatch a new game status whether the latest marked flag is currect.
export default ({ dispatch, getState }) => next => action => {
  switch (action.type) {
    case CELL_MARKED:
      const { board, game, config } = getState();
      const isAlreadyMarked = game.markedCells.includes(action.payload);
      const isMarkedEnough = game.markedCells.length + 1 === config.mines;
      if (isMarkedEnough && !isAlreadyMarked) {
        const isGameDone = game.markedCells.every(mc => {
          const cell = getCell(board, mc);
          if (!cell.isMined) return false;
          return true;
        });
        isGameDone && dispatch(setGameDone());
      }
      break;
    default:
      break;
  }

  next(action);
};
