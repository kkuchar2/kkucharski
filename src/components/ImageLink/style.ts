import styled from "styled-components";

export const StyledImageLink = styled.a`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-left: 40px;
  opacity: 0.7;

  // Mobile 
  @media (max-width: 768px) {
    margin: 0;
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const LinkImage = styled.img`
`;