import React from 'react';
import { StyledExplosion, StyledMainPage, StyledTitle, StyledTitleWrapper } from "./style.js";

const MainPage = () => {

    return <StyledMainPage>
        <StyledExplosion>
            <video autoPlay loop muted>
                <source src="  https://giant.gfycat.com/LightGoldenKissingbug.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </StyledExplosion>
        <StyledTitleWrapper>
            <StyledTitle>KRZYSZTOF KUCHARSKI</StyledTitle>
        </StyledTitleWrapper>
    </StyledMainPage>;
};

export default MainPage;