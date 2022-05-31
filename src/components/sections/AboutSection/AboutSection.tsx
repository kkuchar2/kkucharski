import React from 'react';
import {AboutMe, aboutTextTheme, StyledAboutSection} from "./style"
import {Text} from "kuchkr-react-component-library";
import {StyledTitle, titleTextTheme} from '../common.styles';

export const AboutSection = () => {
    return <StyledAboutSection>
        <StyledTitle>
            <Text theme={titleTextTheme} text={'About'}/>
        </StyledTitle>
        <AboutMe>
            <Text theme={aboutTextTheme}
                  text={'I do like picking different programming projects - anything is fun! I\'ve been working with Java frontend applications, Android AR Applications, Unity with AR Core, Django ' +
                      'and currently I\'m focusing on ReactJS'}/>
        </AboutMe>
    </StyledAboutSection>
}