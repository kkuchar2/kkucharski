import styled from "styled-components";

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  
  @media (max-width: 600px) {
    margin-top: 0;
  }
`

export interface StyledChildrenProps {
    paddingTop: number;
    paddingBottom: number;
    flexDirection?: string;
}

export const StyledChildren = styled.div<StyledChildrenProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection ? props.flexDirection : 'column'};
  padding-top: ${props => props.paddingTop ? `${props.paddingTop}px` : '80px'};
  padding-bottom: ${props => props.paddingBottom ? `${props.paddingBottom}px` : '80px'};
`

export const StyledTitle = styled.div`
  display: flex;
`

export const idTextTheme = {
    textColor: "#FFB800",
    fontSize: "1.5em",
    textAlign: 'left',
    fontWeight: 600,
    margin: "0px 0px 0px 0px"
};

export const titleTextTheme = {
    textColor: "#b6b6b6",
    fontSize: "1.5em",
    textAlign: 'left',
    fontWeight: 600,
    margin: "0px 0px 0px 30px"
};