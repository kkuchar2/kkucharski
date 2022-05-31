import styled from "styled-components";

export const StyledEducationItem = styled.div`
  display: grid;
  box-sizing: border-box;
  gap: 10px 10px;
`

export const StyledLeftSide = styled.div`
  display: flex;
  flex: 1 0;
  min-width: 200px;
`

export const StyledRightSide = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`

export const schoolTextTheme = {
    textColor: "#8eff74",
    fontSize: "1.0em",
    textAlign: 'left',
    fontWeight: 600,
    margin: "0px 0px 0px 0px"
};

export const eductionTitleTextTheme = {
    textColor: "#ffffff",
    fontSize: "1.0em",
    textAlign: 'left',
    fontWeight: 500,
    margin: "0px 0px 0px 0px"
};

export const timeTextTheme = {
    textColor: "#c0c0c0",
    fontSize: "1.0em",
    textAlign: 'left',
    fontWeight: 400,
    margin: "0px 0px 10px 0px"
};

export const descriptionTextTheme = {
    textColor: '#c0c0c0',
    fontSize: "0.8em",
    textAlign: 'left',
    fontWeight: 5600,
    margin: "20px 0px 0px 0px"
};