import styled from "styled-components";

export const StyledChildren = styled.div`
  display: grid;
  box-sizing: border-box;
  gap: 60px 10px;
  width: 100%;
`;

export const StyledWorkSection = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-rows: 80px auto;
  position: relative;

  @media (max-width: 650px) {
    padding-bottom: 40px;
  }
`;