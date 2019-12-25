import React from "react";
import { connect } from "react-redux";
import {
  GAME_DONE_STATUS,
  GAME_OVER_STATUS,
  GAME_PLAYING_STATUS,
  SCREEN_GAME_OVER,
  SCREEN_GAME_PLAYING,
  SCREEN_GAME_DONE
} from "../../common/constants";

// import { ERROR_RESTART_METHOD_DOESNT_EXIST } from "../../common/constants";
import { ScreenWrapper, BlinkingText } from "./Styled";

const GameScreen = ({ status, remainingFlags, tempMessage }) => {
  const getText = () => {
    let result = "";
    switch (status) {
      case GAME_PLAYING_STATUS:
        result = `${SCREEN_GAME_PLAYING} - ${remainingFlags} FLAGS REMAINING`;
        break;
      case GAME_OVER_STATUS:
        result = SCREEN_GAME_OVER;
        break;
      case GAME_DONE_STATUS:
        result = SCREEN_GAME_DONE;
        break;
      default:
    }
    return result;
  };
  const isGameOver = status === GAME_OVER_STATUS;
  const isGameDone = status === GAME_DONE_STATUS;
  const tempMessageExist = tempMessage && tempMessage.length > 0;
  return (
    <ScreenWrapper isGameOver={isGameOver} isGameDone={isGameDone}>
      {tempMessageExist ? (
        <BlinkingText>{tempMessage}</BlinkingText>
      ) : (
        <div>{getText()}</div>
      )}
    </ScreenWrapper>
  );
};

const mapStateToProps = store => {
  return {
    remainingFlags: store.config.mines - store.game.markedCells.length,
    status: store.game.status,
    tempMessage: store.game.tempMessage
  };
};

export default connect(mapStateToProps)(GameScreen);
