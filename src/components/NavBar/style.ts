import styled from "styled-components";

interface StyledNavbarProps {
    visible: boolean;
    navbarOpened: boolean;
}

export const StyledNavBar = styled.div<StyledNavbarProps>`
  width: 100%;
  height: 75px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  position: fixed;
  left: 0;
  backdrop-filter: blur(20px);
  background: rgb(46, 46, 46);
  z-index: 5;
  top: ${props => props.visible ? '0' : '-80px'};
  transition: all 0.25s ease-out;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  @media (min-width: 768px) {
    top: ${props => props.navbarOpened || !props.visible ? '-80px' : '0'};
  }

  @media (max-width: 768px) {
    backdrop-filter: ${props => props.visible && !props.navbarOpened ? 'blur(10px)' : 'blur(0)'};
    background: ${props => props.navbarOpened ? 'transparent' : 'rgba(33, 33, 33, 0.85)'};
  }
`;

export const NavbarItems = styled.div<StyledNavbarProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  // Mobile 
  @media (max-width: 768px) {
    transition: right 0.25s ease-out;
    background: rgba(35, 35, 35, 0.87);
    position: fixed;
    height: 100vh;
    top: ${props => props.visible ? '0' : '80px'};
    right: ${props => props.navbarOpened ? '0' : '-100%'};
    flex-direction: column;
    width: min(75vw, 400px);
    justify-content: center;
  }
`;

export const NavbarBaseItems = styled.div<StyledNavbarProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    height: auto;
    justify-content: center;
  }
`;

export const NavbarAdditionalItems = styled.div<StyledNavbarProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding-right: 20px;
  gap: 20px;


  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    height: auto;
    justify-content: center;
    padding: 0;

    > * {
      margin-top: 20px;
    }
  }
`;