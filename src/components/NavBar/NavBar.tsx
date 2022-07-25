import React, {useEffect, useState} from "react";

import {Theme, useColorMode} from "@chakra-ui/react";

import {useAppContext} from "../../context/state";

import {NavbarItems, StyledNavBar} from "./style";

import DualLanguageSwitch from "components/DualLanguageSwitch/DualLanguageSwitch";
import ThemeSwitcher from "components/ThemeSwitcher/ThemeSwitcher";
import useMediaQuery from "hooks/useMediaQuery";

interface StyleOptions {
    theme: Theme
    colorMode: 'light' | 'dark'
    colorScheme: string
}

const NavBar = () => {

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const isMobile = useMediaQuery('(max-width: 768px)');

    const [navbarOpened, setNavbarOpened] = useAppContext();

    const { colorMode } = useColorMode();

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

    return <StyledNavBar navbarOpened={navbarOpened} visible={show} style={{
        background: colorMode === 'light' ? '#fafafa' : '#1D1D1D'
    }}>
        <NavbarItems navbarOpened={navbarOpened} visible={show}>
            <DualLanguageSwitch firstLanguage={'en'} secondLanguage={'pl'}/>
            <ThemeSwitcher/>
        </NavbarItems>
    </StyledNavBar>;
};

export default NavBar;