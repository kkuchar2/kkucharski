import styled from "styled-components";

interface NavbarOpenedProps {
    opened: boolean;
}

export const StyledHome = styled.div<NavbarOpenedProps>`
  min-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  background: ${props => props.opened ? '#212121' : 'none'};
  transition: background 0.25s ease-out;
`;

export const StyledContent = styled.div<NavbarOpenedProps>`
  box-sizing: border-box;
  display: flex;
  width: 1300px;
  justify-content: center;
  flex-direction: column;
  padding-left: 40px;
  padding-right: 40px;
  filter: ${props => props.opened ? 'blur(8px)' : 'none'};
  transition: filter 0.25s ease-out;

  @media (max-width: 1300px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 0 20px 10px;
  }
`;

export const StyledTitleBox = styled.div`
  max-width: 645px;
  box-sizing: border-box;
  margin-bottom: 100px;
  color: #ffffff;
  font-weight: 600;
  margin-top: 150px;

  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const StyledTitle = styled.h1`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: #ffffff;
  font-weight: 600;
  font-size: 4.5em;
  font-family: serif;

  @media (max-width: 1050px) {
    font-size: 3.3em;
  }

  @media (max-width: 450px) {
    font-size: 3.2em;
  }
`;

export const StyledDescriptionsSection = styled.div`
  margin-top: 100px;
  width: 100%;
  box-sizing: border-box;
  min-width: 0;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const StyledWorkEducation = styled.div`
  display: grid;
  gap: 60px;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 100px;
  grid-template-columns: 2fr 1fr;

  @media (max-width: 840px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const StyledBuildHash = styled.div`
  font-size: 0.8em;
  color: rgba(229, 229, 229, 0.3);
  text-align: left;
  font-weight: 500;
`;
