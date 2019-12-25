// import React from "react";
import styled from "styled-components";

// const Toggle = props => {};

export const ToggleSwitchStyled = styled.button`
  background-color: ${({ theme, isClickedState }) =>
    isClickedState ? theme.cellHoverBgColor : theme.cellBgColor};
  border: 1px solid rgba(0, 0, 0, 0.8);
  transition: all 0.2s ease-in;
  border: 1px solid #ccc;
  padding: 5px;
  margin: 0 5px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const SupermanSwitch = styled(ToggleSwitchStyled)`
  ${({ theme, isClickedState }) => {
    let color = "red";
    let borderColor = "red";
    let backgroundColor = theme.cellBgColor;
    let fontWeight = "300";
    if (isClickedState) {
      backgroundColor = "red";
      color = "#fff";
      fontWeight = "700";
    }
    return `
    background-color: ${backgroundColor};
    border-color: ${borderColor};
    color: ${color};
    font-weignt: ${fontWeight};
  `;
  }}
`;
