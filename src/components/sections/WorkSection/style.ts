import styled from "styled-components";

export const StyledChildren = styled.div`
  display: grid;
  box-sizing: border-box;
  gap: 60px 10px;
  width: 100%;
`;

export const StyledWorkSection = styled.div`
  background: rgb(49, 49, 49);
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  display: grid;
  grid-template-rows: 80px auto;
  position: relative;

  @media (max-width: 650px) {
    padding-bottom: 40px;  
  }
  
  &:after {

    @media (min-width: 650px) {
      content: '';
      display: block;
      position: absolute;
      top: 20%;
      right: 0;
      height: 60%;
      border-right: 2px solid rgba(255, 255, 255, 0.09);
    }

    @media (max-width: 650px) {
      content: '';
      display: block;
      position: absolute;
      left: 20%;
      bottom: 0;
      width: 60%;
      border-bottom: 2px solid rgba(255, 255, 255, 0.09);
    }
  }
`;