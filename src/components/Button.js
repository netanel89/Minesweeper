import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.btnBgColor};
  border: 1px solid rgba(0, 0, 0, 0.8);
  transition: all 0.2s ease-in;
  border: 1px solid ${({ theme }) => theme.screenBtnColor};
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    background-color: ${({ theme }) => theme.btnHoverBgColor};
  }
`;

export default Button;
