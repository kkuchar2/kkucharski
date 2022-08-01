import React from 'react';

import {useTranslation} from "next-export-i18n";

import {AboutMe, StyledAboutSection} from "./style";

export const AboutSection = () => {

    const { t } = useTranslation();

    return <StyledAboutSection>
        <AboutMe>{}
        </AboutMe>
    </StyledAboutSection>;
};