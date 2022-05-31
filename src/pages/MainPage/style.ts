import styled from "styled-components";

export const StyledMainPage = styled.div`
  min-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const StyledContent = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 1200px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const StyledTitle = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
  color: #ff9100;
  font-size: clamp(1.8rem, 3.2vw, 2rem);
  font-weight: 600;
`;

export const StyledLinks = styled.div`
  display: grid;
  gap: 20px 20px;
  box-sizing: border-box;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  width: 100%;
`;

export const StyledDescriptionsSection = styled.div`
  margin-top: 100px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  min-width: 0;
`;

export const StyledWorkEducation = styled.div`
  margin-top: 100px;
  padding-top: 20px;
  display: grid;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 50px;
  grid-template-columns: 2fr 1fr;

  @media (max-width: 840px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const StyledLinkWrapper = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bebebe;
  text-decoration: none;
  font-size: 0.9em;
  font-weight: 600;
  flex-direction: column;
`;

export const StyledLink = styled.a`
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e6e6e6;
  text-decoration: none;
  background: #2e2e2e;
  font-size: 0.9em;
  font-weight: 600;
  flex-direction: column;

  &:hover {
    background: #3c3c3c;
  }
`;

export const helloTextTheme = {
    textColor: "#e5e5e5",
    fontSize: "0.8em",
    textAlign: "left",
    fontWeight: 500,
    margin: "0px 0px 0px 0px"
};

