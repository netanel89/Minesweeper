import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  MAX_HEIGHT,
  MAX_WIDTH,
  GAME_DONE_STATUS,
  GAME_OVER_STATUS
} from "../../common/constants";
import { InputWithLabel, Button, SupermanSwitch } from "../../components";
import { setSupermanMode, resetGame } from "../../actions/gameActions";

// import { ERROR_RESTART_METHOD_DOESNT_EXIST } from "../../common/constants";
import { ConfigWrapper } from "./Styled";

const GameConfig = props => {
  const { width, height, mines, isSuperman, status, actions } = props;
  const [gameWidth, setGameWidthToState] = useState(width);
  const [gameHeight, setGameHeightToState] = useState(height);
  const [gameMines, setGameMinesToState] = useState(mines);

  const onResetClick = () => {
    const config = {
      width: gameWidth,
      height: gameHeight,
      mines: gameMines,
      isSuperman: false
    };
    actions.resetGame(config);
  };

  const validate = (value, max, min = 1) => value >= min && value <= max;

  const onWidthChange = e => {
    const value = e.target.value ? e.target.valueAsNumber : 0;
    if (validate(value, MAX_WIDTH)) {
      setGameWidthToState(value);
    }
  };

  const onHeightChange = e => {
    const value = e.target.value ? e.target.valueAsNumber : 0;
    if (validate(value, MAX_HEIGHT)) {
      setGameHeightToState(value);
    }
  };

  const onMinesChange = e => {
    const value = e.target.value ? e.target.valueAsNumber : 0;
    if (validate(value, gameHeight * gameWidth)) {
      setGameMinesToState(value);
    }
  };

  const isGameOver = status === GAME_OVER_STATUS;
  const isGameDone = status === GAME_DONE_STATUS;

  return (
    <ConfigWrapper>
      <InputWithLabel
        elementId="width-input"
        type="number"
        min={0}
        max={MAX_WIDTH}
        value={gameWidth}
        label="witdh"
        placeholder="Game witdh..."
        onChange={onWidthChange}
      />
      <InputWithLabel
        elementId="height-input"
        type="number"
        min={1}
        max={MAX_HEIGHT}
        value={gameHeight}
        label="height"
        placeholder="Game height..."
        onChange={onHeightChange}
      />
      <InputWithLabel
        elementId="mines-input"
        type="number"
        min={1}
        max={gameHeight * gameWidth}
        value={gameMines}
        label="mines"
        placeholder="Mines Numbers..."
        onChange={onMinesChange}
      />
      <Button id="reset-btn" onClick={onResetClick}>
        Reset Game
      </Button>
      <SupermanSwitch
        id="superman-switch"
        isClickedState={isSuperman}
        onClick={actions.setSupermanMode}
        title="Superman Mode"
        disabled={isGameOver || isGameDone}
      >
        S
      </SupermanSwitch>
    </ConfigWrapper>
  );
};

const mapStateToProps = store => {
  return {
    ...store.config,
    ...store.game
  };
};

const mapDispatchToProps = dispatch => {
  const combinedActions = {
    setSupermanMode,
    resetGame
  };
  return {
    actions: bindActionCreators(combinedActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameConfig);
