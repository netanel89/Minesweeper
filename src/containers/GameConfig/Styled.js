import styled from "styled-components";

export const ConfigWrapper = styled.div`
  background-color: ${({ theme }) => theme.configBgColor};
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const ConfigRow = styled.div`
  display: flex;
`;
