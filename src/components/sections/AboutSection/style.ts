import styled from "styled-components";

export const AboutMe = styled.div`
  line-height: 1.7;
  font-weight: 400;
  font-size: 1.3rem;
  max-width: 600px;
  font-family: Inter, sans-serif;
`;

export const StyledAboutSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  margin-top: 100px;

  @media (max-width: 600px) {
    padding: 0 20px;
  }
`;