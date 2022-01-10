import styled from "styled-components";

export const StyledWorkDescription = styled.div`
  display: flex;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const StyledLeftSide = styled.div`
  display: flex;
  flex: 1 1;
  padding: 5px;
  max-width: 250px;
  
  @media (max-width: 600px) {
    width: 100%;
    align-items: center;
    justify-content: flex-start;
  }
`

export const StyledRightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 5px;

  @media (max-width: 600px) {
    width: 100%;
    align-items: flex-start;
    justify-content: center;
  }
`

export const companyTextTheme = {
    textColor: "#32AF5C",
    fontSize: "1.3em",
    textAlign: 'left',
    fontWeight: 600,
    margin: "0px 0px 0px 0px"
};

const textWhiteColor = '#8d8d8d';

export const jobTitleTextTheme = {
    textColor: '#c7c7c7',
    fontSize: "1.2em",
    textAlign: 'left',
    fontWeight: 500,
    margin: "0px 0px 0px 0px"
};

export const jobTimeTextTheme = {
    textColor: '#7664a4',
    fontSize: "1.2em",
    textAlign: 'left',
    fontWeight: 500,
    margin: "0px 0px 10px 0px"
};

export const jobDescriptionTextTheme = {
    textColor: textWhiteColor,
    fontSize: "1em",
    textAlign: 'left',
    fontWeight: 5600,
    margin: "0px 0px 0px 0px"
};