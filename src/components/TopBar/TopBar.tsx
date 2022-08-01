import React from "react";

import {Box} from "@chakra-ui/react";

import {StyledTopBar} from "./style";

import SocialIconWithHover from "components/SocialIcon/SocialIcon";
import ThemeSwitcher from "components/ThemeSwitcher/ThemeSwitcher";

const TopBar = () => {

    return <StyledTopBar bg={'bg-navbar'} transition='background 2.15s' transitionTimingFunction='ease-out'>
        <Box className={'flex items-center justify-between gap-[30px] h-full w-full md:w-auto'}>
            {/*<DualLanguageSwitch firstLanguage={'en'} secondLanguage={'pl'}/>*/}
            <Box
                display={'flex'}
                flexDirection={{ base: 'row' }}
                alignItems={{ base: 'center' }}
                alignSelf={{ base: 'center' }}
                justifyContent={'center'}
                gap={'30px'}>
                <SocialIconWithHover
                    size={45}
                    bgColor='none'
                    defaultColor={'#e1e1e1'}
                    hoverColor={'white'}
                    url="https://github.com/kkuchar2"/>

                <SocialIconWithHover
                    size={45}
                    bgColor='none'
                    defaultColor={'#e1e1e1'}
                    hoverColor={'white'}
                    url={"https://www.linkedin.com/in/kkuchar/"}/>
            </Box>
            <ThemeSwitcher/>
        </Box>
    </StyledTopBar>;
};

export default TopBar;