import styled from "styled-components";

export const StyledMainPage = styled.div`
  height: 6000px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 300px;
`;

interface StyledTitleWrapperProps {
    offsetY: string;
    offsetX: string;
    position: string;
}

export const StyledTitleWrapper = styled.div <StyledTitleWrapperProps>`
  position: ${props => props.position};
  top: 0;
  left: ${props => props.offsetX};
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.6s ease-out;

  @media (max-width: 1000px) {
    margin-left: 0;
    justify-content: center;
    align-items: center;
  }

  .Typewriter {
    margin-top: 40px;

    @media (max-width: 600px) {
      margin-left: 0;
      margin-top: 30px;
    }
  }

  .Typewriter__wrapper {
    border: 5px solid black;
    color: rgb(0, 0, 0);
    font-size: clamp(25px, 1.52rem, 100px);
    padding: 5px;
  }

  .Typewriter__cursor {
    color: transparent;
    font-size: 0.5em;
  }
`;

export const StyledTitle = styled.div`
  text-align: center;
  color: rgb(0, 0, 0);
  z-index: 1;
  font-size: 1.52em;
`;

export const StyledTitleHello = styled.div`
  text-align: center;
  color: rgb(0, 0, 0);
  z-index: 1;
  font-size: clamp(25px, 4.5rem, 100px);
  font-weight: 1000;
`;

export const seeMyWorkButtonTheme = {
    width: "220px",
    height: "40px",
    background: "#ffffff",
    disabledBackground: "rgba(47,47,47,0.43)",
    hoverBackground: "#0065ff",
    border: "2px solid " + "#656565",
    borderRadius: "3px",
    margin: "50px 0px 0px 10px",
};

export const seeMyWorkTextTheme = {
    fontSize: "1.1em",
    textColor: "#3d3d3d",
    disabledTextColor: "rgba(255,255,255,0.20)",
    fontWeight: 500,
    margin: "0px 0px 0px 10px"
};

export const StyledMe = styled.div`
  display: flex;
  margin-top: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

interface StyledAboutMeProps {
    opacity: number;
}

export const StyledAboutMe = styled.div <StyledAboutMeProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 800px;
  margin-top: 400px;
  opacity: ${props => props.opacity ? props.opacity : 0};
  transition: all 1s ease-in-out;
  background: #eff7fb;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const StyledAboutMeDescription = styled.div`
  font-size: clamp(15px, 1rem, 100px);
  width: 50%;
  padding: 10%;
`;

interface StyledNavbarProps {
    opacity: number;
}

export const StyledNavbar = styled.div<StyledNavbarProps>`
  opacity: 1;
  height: 60px;
  background: #232323;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;

export const StyledAboutMeImage = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: ${props => props.left};
  transition: left 1.4s ease;
  
  img {
    position: absolute;
   
    border-radius: 50%;
    transition: all 0.5s ease-in-out;
    
    @media (max-width: 600px) {
      width: 100px;
      height: 100px;
    }
  }
`;