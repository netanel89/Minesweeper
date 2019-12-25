import styled, { keyframes } from "styled-components";

const rollToRight = keyframes`
    0% { left: -50%;}
    100%{ left : 100%;}
`;

export const ScreenWrapper = styled.div`
  background-color: ${({ theme }) => theme.screenBgColor};
  color: ${({ isGameDone, isGameOver }) =>
    isGameDone ? "#00ff00" : isGameOver ? "#fd3535" : "#fff"};
  border: 5px solid #ccc;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 2em;
  div {
    /* min-width: 100%;
    position: absolute;
    animation: ${rollToRight} 10s linear infinite; */
  }
`;

const blinking = keyframes`
50% { opacity: 0; }
`;

export const BlinkingText = styled.div`
  animation: ${blinking} 1s linear infinite;
`;
