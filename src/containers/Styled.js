import styled from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};
const device = {
  mobileL: `(max-width: ${size.mobileL})`
};

export const GameWrapper = styled.div`
  font-family: "Raleway", sans-serif;
  font-size: 15px;
  position: relative;
  @media ${device.mobileL} {
    font-size: 10px;
  }
`;
