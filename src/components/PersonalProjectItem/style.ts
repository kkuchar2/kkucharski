import styled from "styled-components";

export const StyledPersonalProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  background: #262626;
  padding: 20px;
  border-radius: 10px;
  transition: 0.3s all ease-out;
  min-width: 450px;
  width: 350px;

  @media (max-width: 600px) {
    flex-direction: column;
    min-width: 250px;
    width: 100%;
  }

  &:hover {
    background: #2a2a2a;
  }
`

export const StyledDescription = styled.div`
  display: flex;
  flex: 1 1;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 100%;
  }
`
export const StyledFirstLink = styled.a`
  text-decoration: none;
  background: #343434;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 10px;
  color: white;
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
  background: #343434;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 10px;
  color: white;
  font-size: 0.9em;
  font-weight: 600;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 20px;

  &:hover {
    background: #3d3d3d;
  }

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

export const StyledLinks = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  margin-top: 30px;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 600px) {
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }
`

export const StyledProjectImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  margin-top: 20px;
`;

export const projectNameTheme = {
    textColor: "#ffa420",
    fontSize: "1.2em",
    textAlign: 'left',
    fontWeight: 5600,
    margin: "0px 0px 0px 0px"
};

const textWhiteColor = '#c7c7c7';

export const linkNameTheme = {
    textColor: textWhiteColor,
    fontSize: "1em",
    textAlign: 'left',
    fontWeight: 600,
    margin: "0px 0px 0px 0px"
};

export const projectStackTheme = {
    textColor: "#8090a9",
    fontSize: "1.05em",
    textAlign: 'left',
    fontWeight: 500,
    margin: "0px 0px 10px 0px"
};

export const projectStackDescription = {
    textColor: textWhiteColor,
    fontSize: "1em",
    textAlign: 'left',
    fontWeight: 5600,
    margin: "10px 0px 0px 0px"
};