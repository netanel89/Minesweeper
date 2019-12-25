import styled, { keyframes } from "styled-components";

const animation = keyframes`
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  `;

const Loader = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 999;
  &::after {
    content: " ";
    border-radius: 50%;
    display: block;
    width: 0;
    height: 0;
    box-sizing: border-box;
    border: 26px solid #333;
    border-color: #333 transparent #333 transparent;
    animation: ${animation} 1.2s infinite;
    top: 10%;
    right: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
`;

export default Loader;
