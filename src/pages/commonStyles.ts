import {Link, LinkProps} from "react-router-dom";
import styled from "styled-components";

export interface StyledLinkProps {
    marginTop?: number,
    marginRight?: number,
    marginBottom?: number,
    marginLeft?: number,
    disabled?: boolean
}

export const StyledLink = styled(Link)<LinkProps & StyledLinkProps>`
  text-decoration: none;
  color: ${props => props.disabled ? "rgba(0,137,88,0.4)" : "#008958"};
  font-size: 1.0em;
  font-weight: 600;
  margin-top: ${props => `${props.marginTop}px`};
  margin-right: ${props => `${props.marginRight}px`};
  margin-bottom: ${props => `${props.marginBottom}px`};
  margin-left: ${props => `${props.marginLeft}px`};


  &[disabled] {
    pointer-events: none;
  }

  &:hover {
    text-decoration: ${props => props.disabled ? 'none' : 'underline'};
  }
`;