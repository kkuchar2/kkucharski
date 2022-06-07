import {StyledHamburgerButton, StyledHamburgerButtonInner} from "./style";

interface HamburgerButtonProps {
    onClick: () => void;
    navbarOpened: boolean;
}

export const HamburgerButton = (props: HamburgerButtonProps) => {

    const { onClick, navbarOpened } = props;

    return <StyledHamburgerButton navbarOpened={navbarOpened} onClick={onClick}>
        <StyledHamburgerButtonInner navbarOpened={navbarOpened}/>
    </StyledHamburgerButton>;
};