import styled from "styled-components";

interface StyledNavbarProps {
    visible: boolean;
    navbarOpened: boolean;
}

export const StyledNavBar = styled.div<StyledNavbarProps>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  position: fixed;
  background: none;
  left: 0;
  height: 50px;
  z-index: 5;
  padding-left: 20px;
  padding-right: 20px;
  top: ${props => props.visible ? '0' : '-80px'};
  transition: all 0.25s ease-out;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const NavbarItems = styled.div<StyledNavbarProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  height: 100%;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const NavbarBaseItems = styled.div<StyledNavbarProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  gap: 20px;

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
  margin-left: 20px;


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