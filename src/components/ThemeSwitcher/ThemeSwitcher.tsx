import React, {useMemo} from "react";

import {useColorMode} from "@chakra-ui/react";
import {SunIcon} from "@heroicons/react/outline";
import {MoonIcon} from "@heroicons/react/solid";
import {useTranslation} from "next-export-i18n";

import { StyledThemeSwitchButton } from "./style";
import {ThemeSwitcherProps} from "./ThemeSwitcher.types";

const ThemeSwitcher = (props: ThemeSwitcherProps) => {

    const { colorMode, toggleColorMode } = useColorMode();

    const { iconSize } = props;

    const { t } = useTranslation();

    const renderThemeSwitchIcon = useMemo(() => {
        if (colorMode === 'light') {
            return <MoonIcon color="#A0AEC0"/>;
        }
        return <SunIcon color="#e6e6e6"/>;
    }, [colorMode]);

    return <StyledThemeSwitchButton
        title={t('common.themeSwitch')}
        onClick={toggleColorMode}
        theme={colorMode}
        size={iconSize}>
        {renderThemeSwitchIcon}
    </StyledThemeSwitchButton>;
};

ThemeSwitcher.defaultProps = {
    iconSize: 35
};

export default ThemeSwitcher;