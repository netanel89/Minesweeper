import React from "react";
import { GameBoard, GameConfig, GameScreen, MaybeLoader } from "./";
import { Logo } from "../components";
import AppWrapper from "./AppWrapper";
import { GameWrapper } from "./Styled";

const Minesweeper = props => {
  return (
    <AppWrapper {...props}>
      <GameWrapper>
        <MaybeLoader />
        <Logo text="Minesweeper" />
        <GameConfig />
        <GameScreen />
        <GameBoard />
      </GameWrapper>
    </AppWrapper>
  );
};

export default Minesweeper;
