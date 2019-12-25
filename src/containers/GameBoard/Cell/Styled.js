import styled from "styled-components";

export const GridCell = styled.div`
  background-color: ${({ theme, isRevealed }) =>
    isRevealed ? theme.cellClickedBgColor : theme.cellBgColor};
  border: 1px solid rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in;
  padding: 5px;
  cursor: pointer;
  ${({ isMarked, isMined, isRevealed }) => {
    if (isMarked || (isRevealed && isMined)) {
      return `
        &::after{
          color: red;
          content: "${(isMarked && "⚑") || (isMined && "⚙")}";
        }
      `;
    }
  }};
`;
