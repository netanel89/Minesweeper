import styled from "styled-components";

export const Grid = styled.div`
/* display: flex; */
  display: grid;
  grid-template-columns: ${({ gameWidth = 5 }) =>
    `repeat(${gameWidth},1.5em);`};
  grid-template-rows: ${({ gameHeight = 5 }) =>
    `repeat(${gameHeight}, 1.5em);`};
  justify-content: center;
  /* background-color: ${({ theme }) => theme.gridBgColor}; */
  padding: 10px;
  position: relative;
  /* flex-direction: column;s */
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
`;
