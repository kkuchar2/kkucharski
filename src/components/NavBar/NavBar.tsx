import React, {useCallback, useEffect, useMemo, useState} from "react";

import {useAppContext} from "../../context/state";
import {NavBarData} from "../../data";

import {NavBarItem} from "./NavBarItem/NavBarItem";
import {NavbarAdditionalItems, NavbarBaseItems, NavbarItems, StyledNavBar} from "./style";

import ButtonLink from "components/ButtonLink/ButtonLink";
import {HamburgerButton} from "components/HamburgerButton/HamburgerButton";
import ImageLink from "components/ImageLink/ImageLink";
import {DataItems} from "components/sections/common.types";
import useMediaQuery from "hooks/useMediaQuery";

const NavBar = (props: DataItems<NavBarData>) => {

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const { items } = props;

    const isMobile = useMediaQuery('(max-width: 768px)');

    const [navbarOpened, setNavbarOpened] = useAppContext();

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(false);
            }
            else { // if scroll up show the navbar
                setShow(true);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (!isMobile) {
            setNavbarOpened(false);
        }
    }, [isMobile]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    const onHamburgerClick = useCallback(() => {
        setNavbarOpened(!navbarOpened);
    }, [navbarOpened]);

    const renderItems = useMemo(() => {
        return items.map((item, index) => <NavBarItem key={index} number={index} {...item}/>);
    }, [items]);

    const renderHamburgerButton = useMemo(() => {
        if (!isMobile) {
            return null;
        }
        return <HamburgerButton onClick={onHamburgerClick} navbarOpened={navbarOpened} topNavbarVisible={show}/>;
    }, [isMobile, navbarOpened, show]);

    return <StyledNavBar navbarOpened={navbarOpened} visible={show}>
        <NavbarItems navbarOpened={navbarOpened} visible={show}>
            <NavbarBaseItems navbarOpened={navbarOpened} visible={show}>
                {renderItems}
            </NavbarBaseItems>

            <NavbarAdditionalItems navbarOpened={navbarOpened} visible={show}>
                <ImageLink
                    href={"https://github.com/kkuchar2"}
                    target={'_blank'}
                    src={'/images/github_icon.svg'}
                    alt={'github_logo'}
                    width={27}/>

                <ImageLink
                    href={"https://www.linkedin.com/in/kkuchar/"}
                    target={'_blank'}
                    src={'/images/linkedin_icon.svg'}
                    alt={'linkedin_logo'}
                    width={27}/>

                <ButtonLink
                    href={"https://storage.googleapis.com/kkucharski-server/resume_public_2022.pdf"}
                    rel="noopener noreferrer"
                    target="_blank"
                    download={true}>Resume</ButtonLink>
            </NavbarAdditionalItems>
        </NavbarItems>

        {renderHamburgerButton}
    </StyledNavBar>;
};

export default NavBar;