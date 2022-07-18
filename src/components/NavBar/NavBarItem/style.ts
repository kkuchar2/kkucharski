import styled from "styled-components";

export const StyledNavBarItemSpan = styled.div`
  letter-spacing: 1px;
  color: white;
  font-size: 0.9em;
  font-weight: 200;
  position: relative;
  z-index: 5;

  @media (max-width: 768px) {
    font-size: 1.3em;
  }

  &::before {
    transition: all .2s cubic-bezier(.175, .885, .32, 1.275);
    content: "";
    width: 100%;
    position: absolute;
    bottom: -10px;
    height: 3px;
    left: 0;
    display: block;
    background: #ffc4ff;
    transform: translate3d(0, 5px, 0);
    opacity: 0;
  }
`;

interface StyledNavBarItemProps {
    number: number;
}

export const StyledNavBarItem = styled.div<StyledNavBarItemProps>`
  box-sizing: border-box;
  height: 100%;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-left: 20px;
  margin-right: 20px;

  // Mobile
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 20px;
    margin: 0 0 10px;
  }

  &:hover {
    cursor: pointer;

    ${StyledNavBarItemSpan} {
      &::before {
        transform: ${props => `translateZ(0) scale3d(1.1,1.1,1.1) rotate(${props.number % 2 ? '1deg' : '-2deg'})`};
        opacity: 1;
      }
    }
  }
`;