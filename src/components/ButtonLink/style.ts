import styled from "styled-components";

export const StyledButtonLink = styled.a`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-left: 40px;

  // Mobile 
  @media (max-width: 768px) {
    margin: 0;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const LinkButton = styled.button`
  background: #373737;
  border: none;
  color: white;
  border-radius: 4px;
  padding: 12px 40px;
  font-weight: bold;
  box-sizing: border-box;

  // Mobile 
  @media (max-width: 768px) {
    margin: 0;
  }

  &:hover {
    cursor: pointer;
    background: #434343;
  }
`;