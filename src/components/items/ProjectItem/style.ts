import styled from "styled-components";

export const StyledPersonalProjectItemWrapper = styled.div`
`

export const StyledPersonalProjectItem = styled.div`
  background: rgb(49, 49, 49);
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  height: auto;
`

export const StyledDescription = styled.div`
  display: grid;
  grid-template-rows: 30px 70px auto;
  margin-bottom: 20px;
`
export const StyledFirstLink = styled.a`
  text-decoration: none;
  background: rgba(0, 0, 0, 0.14);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  font-size: 0.9em;
  font-weight: 600;
  padding-left: 20px;
  padding-right: 20px;

  &:hover {
    background: #3d3d3d;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  background: rgba(0, 0, 0, 0.14);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  font-size: 0.9em;
  font-weight: 600;
  padding-left: 20px;
  padding-right: 20px;

  &:hover {
    background: #3d3d3d;
  }
`;

export const StyledLinks = styled.div`
  display: grid;
  box-sizing: border-box;
  gap: 10px 10px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`

export const projectNameTheme = {
    textColor: "#ffb8b1",
    fontSize: "1.0em",
    textAlign: 'left',
    fontWeight: 400,
    margin: "0px 0px 0px 0px"
};

export const linkNameTheme = {
    textColor: '#2fff00',
    fontSize: "1em",
    textAlign: 'left',
    fontWeight: 400,
    margin: "0px 0px 0px 0px"
};

export const projectStackTheme = {
    textColor: "#8486e6",
    fontSize: "0.9em",
    textAlign: 'left',
    fontWeight: 400,
    margin: "0px 0px 0px 0px"
};

export const projectDescriptionTextTheme = {
    textColor: '#c0c0c0',
    fontSize: "0.9em",
    textAlign: 'left',
    fontWeight: 400,
    margin: "0px 0px 0px 0px"
};