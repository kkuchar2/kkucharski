import styled from "styled-components";

export const StyledProjectItem = styled.div`
  background: rgba(255, 255, 255, 0.02);
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0;
  border-radius: 5px;
  box-sizing: border-box;
  height: auto;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

  @media (min-width: 768px) {
    &:hover {
      transform: translateY(-7px);

      > * h1 {
        color: #ff9900;
      }
    }
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  grid-template-rows: 50px 70px 130px;
  margin-bottom: 20px;
`;

export const ProjectTitle = styled.h1`
  color: #f6f6f6;
  font-weight: 600;
  font-size: 20px;
  font-family: "Calibre", sans-serif;
  margin-top: 0;
`;

export const ProjectDescription = styled.div`
  color: #ccd6f6;
  font-weight: 400;
  font-size: 15px;
  font-family: "Calibre", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 85%;
  padding-top: 10px;
  flex: 1 0;
`;

export const ProjectStacks = styled.div`
  color: #bebebe;
  font-weight: 300;
  font-size: 15px;
  font-family: "Calibre", sans-serif;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 10px;
`;

export const StyledProjectStack = styled.div`
  color: #959595;
  font-weight: 300;
  font-size: 14px;
  font-family: "Calibre", sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledLinks = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: flex-start;
  height: 50px;
  gap: 20px;
`;