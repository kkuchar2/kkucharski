import styled from "styled-components";

export const StyledChildren = styled.div`
  display: grid;
  box-sizing: border-box;
  gap: 60px 10px;
  width: 100%;
`;

export const StyledEducationSection = styled.div`
  background: rgb(49, 49, 49);
  box-sizing: border-box;
  padding: 20px 20px 20px 40px;
  width: 100%;
  display: grid;
  grid-template-rows: 80px auto;

  @media (max-width: 650px) {
    padding: 40px 20px 20px;
  }
`;