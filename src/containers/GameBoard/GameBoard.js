import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  onCellClick,
  onCellMarked,
  onGameOver
} from "../../actions/boardActions";
import { resetGame, setNoMoreFlagsNot } from "../../actions/gameActions";
import { getCell } from "../../reducers/boardReducer";
import { GAME_OVER_STATUS, GAME_DONE_STATUS } from "../../common/constants";
import Cell from "./Cell/Cell";
import { GameIndicator } from "../../components";
import { Grid } from "./Styled";

// main game board container.
// we use a class component to prevent creating new callbacks for cell comp and by that a new unnecessary render for that.
// react hooks has a solution for that by using useCallback hook
// but it doesn't help us here because of the internal use of the closure variable of board/game.
class GameBoard extends React.Component {
  componentDidMount() {
    const { config, actions } = this.props;
    actions.resetGame(config);
  }

  onCellClick = id => {
    const { board, game, actions } = this.props;
    const cell = getCell(board, id);
    const isMarked = game.markedCells.includes(id);
    if (!isMarked && !cell.isRevealed) {
      cell.isMined ? actions.onGameOver(id) : actions.onCellClick(id);
    }
  };

  onCellMark = id => {
    const { config, game, actions } = this.props;
    const remainingFlags = config.mines - game.markedCells.length;
    const isMarked = game.markedCells.includes(id);
    remainingFlags === 0 && actions.setNoMoreFlagsNot();
    (remainingFlags > 0 || isMarked) && actions.onCellMarked(id);
  };

  render() {
    const { board, config, game } = this.props;

    const isGameOver = game.status === GAME_OVER_STATUS;
    const isGameDone = game.status === GAME_DONE_STATUS;
    const isSupermanMode = game.isSuperman;

    return (
      <Grid gameWidth={config.width} gameHeight={config.height}>
        <GameIndicator isGameOver={isGameOver} isGameDone={isGameDone} />
        {board.map(row =>
          row.map(cell => (
            <Cell
              key={cell.id}
              id={cell.id}
              isMarked={cell.isMarked}
              isMined={cell.isMined}
              isRevealed={
                isSupermanMode && cell.isMined ? true : cell.isRevealed
              }
              value={cell.value}
              onCellClick={this.onCellClick}
              onCellMark={this.onCellMark}
            />
          ))
        )}
      </Grid>
    );
  }
}

const mapStateToProps = store => {
  return {
    config: store.config,
    board: store.board,
    game: store.game
  };
};

const mapDispatchToProps = dispatch => {
  const combinedActions = {
    onCellClick,
    onGameOver,
    resetGame,
    onCellMarked,
    setNoMoreFlagsNot
  };
  return {
    actions: bindActionCreators(combinedActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard);
