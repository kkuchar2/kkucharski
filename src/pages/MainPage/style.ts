import styled from "styled-components";

export const StyledMainPage = styled.div`
  height: 6000px;
  width: 100%;
  background: #FAFAFA;
  box-sizing: border-box;
`;

export const StyledTitleWrapper = styled.div`
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    margin-left: 0;
    justify-content: center;
    align-items: center;
  }

  .Typewriter__wrapper {
    border: 5px solid transparent;
    border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
    border-image-slice: 1;
    color: rgb(0, 0, 0);
    font-size: 1.52em;
    margin-left: 20px;
  }

  .Typewriter__cursor {
    color: transparent;
    font-size: 0.5em;
  }
`;

export const StyledTitle = styled.div`
  max-width: 50%;
  text-align: center;
  color: rgb(0, 0, 0);
  z-index: 1;
  font-size: 1.52em;
`;

export const StyledTitleHello = styled.div`
  max-width: 50%;
  text-align: center;
  color: rgb(0, 0, 0);
  z-index: 1;
  font-size: 3vw;
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
}

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
`;