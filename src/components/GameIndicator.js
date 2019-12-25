import styled from "styled-components";

const GameIndicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 3em;
  transition: all 500ms ease-in;
  display: ${({ isGameOver, isGameDone }) =>
    isGameOver || isGameDone ? "block" : "none"};

  ${({ isGameDone, isGameOver }) => {
    let bgColorResult = "background-color: rgba(255, 255, 255, 0.5)";
    // if (isGameDone)
    //   bgColorResult = "background-color: rgba(255, 255, 255, 0.4)";
    if (isGameOver) bgColorResult = "background-color: rgba(0, 0, 0, 0.5)";
    return bgColorResult;
  }};
`;

export default GameIndicator;
