import React from "react";
import styled from "styled-components";

const LogoStyled = styled.div`
  font-size: 1.6em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 5px 10px 5px;
  div {
    padding: 5px 0 0 5px;
    text-transform: uppercase;
  }
  &::before {
    font-size: 1.2em;
    content: "⚙";
  }
`;

const Logo = props => (
  <LogoStyled>
    <div>{props.text}</div>
  </LogoStyled>
);

export default Logo;
