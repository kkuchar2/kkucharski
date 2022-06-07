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
  background: #212121;
  z-index: 5;
  top: ${props => props.visible ? '0' : '-80px'};
  transition: top 0.25s ease-out;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  @media (max-width: 768px) {
    top: ${props => props.navbarOpened || !props.visible ? '-80px' : '0'};
  }
`;

interface StyledNavbarItemProps {
    navbarOpened: boolean;
}

export const NavbarItems = styled.div<StyledNavbarItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 100%;

  // Mobile 
  @media (max-width: 768px) {
    transition: right 0.25s ease-out;
    background: #232323;
    position: fixed;
    right: ${props => props.navbarOpened ? '0' : '-100%'};
    top: 0;
    flex-direction: column;
    width: min(75vw, 400px);
    justify-content: center;
  }
`;

export const NavbarBaseItems = styled.div<StyledNavbarItemProps>`
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

export const NavbarAdditionalItems = styled.div<StyledNavbarItemProps>`
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