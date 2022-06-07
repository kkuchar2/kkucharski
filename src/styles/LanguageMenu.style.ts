import styled from "styled-components";

interface StyledLinkButtonProps {
    enabled: boolean;
}

export const StyledLinkButton = styled.button<StyledLinkButtonProps>`
  text-decoration: none;
  font-size: 0.9em;
  font-weight: 600;
  background: ${(props => props.enabled ? "rgba(0,0,0,0.29)" : "rgba(0,0,0,0.13)")};
  padding: 20px;
  border: none;

  &:hover {
    background: ${(props => props.enabled ? "rgba(0,0,0,0.29)" : "rgba(0,0,0,0.13)")};
    cursor: pointer;
  }
`;

export const StyledLanguageLinks = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
  padding: 20px;
  width: 100%;
`;