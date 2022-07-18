import styled from "styled-components";

export const StyledButtonLink = styled.a`
  height: 40px;
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
  background: #601D48;
  border: none;
  color: #f8f8f8;
  border-radius: 4px;
  font-size: 12px;
  padding: 6px 20px;
  font-weight: 600;
  line-height: 20px;
  font-family: Inter, sans-serif;
  box-sizing: border-box;

  // Mobile 
  @media (max-width: 768px) {
    margin: 0;
  }

  &:hover {
    cursor: pointer;
    background: #862864;
  }
`;