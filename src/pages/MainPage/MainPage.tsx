import React from 'react';
import {
    seeMyWorkButtonTheme,
    seeMyWorkTextTheme,
    StyledMainPage,
    StyledTitle,
    StyledTitleHello,
    StyledTitleWrapper,
    StyledMe
} from "./style";
import Typewriter from 'typewriter-effect';
import {Button, Text} from "kuchkr-react-component-library";
import Background from 'pages/Background';

const MainPage = () => {

    return <StyledMainPage>
        <Background />
        <StyledTitleWrapper>
            <StyledTitleHello>Hello</StyledTitleHello>

            <StyledMe>
                <StyledTitle>I'm Krzysztof Kucharski,</StyledTitle>
                <Typewriter
                    options={{
                        strings: ['Software Engineer', 'Analyst', 'Frontend Developer'],
                        autoStart: true,
                        delay: 25,
                        deleteSpeed: 20,
                        loop: true,
                    }}
                />
            </StyledMe>
            {/*<Button theme={seeMyWorkButtonTheme}>*/}
            {/*    <Text theme={seeMyWorkTextTheme} text={'View my work'}/>*/}
            {/*</Button>*/}
        </StyledTitleWrapper>
    </StyledMainPage>;
};

export default MainPage;