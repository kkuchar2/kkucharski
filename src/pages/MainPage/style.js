import styled from "styled-components";

export const StyledMainPage = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: #1a1a1a;
  box-sizing: border-box;
  background: url("https://www.toptal.com/designers/subtlepatterns/patterns/webb.png");
`;

export const StyledTitleWrapper = styled.div`
  margin-top: 100px;
  max-width: 1480px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 6vw;
  
  margin-left: 50px;
  
  @media (max-width: 1000px) {
    margin-left: 0;
    justify-content: center;
    align-items: center;
    font-size: 10vw;
  }
`;

export const StyledTitle = styled.div`
  max-width: 50%;
  color: rgb(255, 255, 255);
  z-index: 1;
`;

export const StyledExplosion = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  box-sizing: border-box;
  overflow: hidden;
  video {
    width: 100%    !important;
    height: 100%;   !important;
    object-fit: cover;
  }
`;