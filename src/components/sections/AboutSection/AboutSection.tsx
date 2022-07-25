import React from 'react';

import {useTranslation} from "next-export-i18n";

import {AboutMe, StyledAboutSection} from "./style";

export const AboutSection = () => {

    const { t } = useTranslation();

    return <StyledAboutSection>
        <AboutMe>{'I do like picking different programming projects - anything is fun! I\'ve been working with Java frontend applications, Android AR Applications, Unity with AR Core, Django ' +
            'and currently I\'m focusing on ReactJS.'}
        </AboutMe>
    </StyledAboutSection>;
};