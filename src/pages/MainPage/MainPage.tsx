import React from "react";
import {Text} from "kuchkr-react-component-library";
import {
    helloTextTheme, nameTextTheme,
    StyledContent,
    StyledKeyboardImage,
    StyledMainPage,
    StyledBottomSection,
    StyledLink,
    StyledTitleSection,
    softwareDevTextTheme,
    StyledTopSection,
    buttonTextTheme
} from "./style";

const MainPage = () => {

    return <StyledMainPage>
        <StyledContent>
            <StyledTopSection>
                <StyledTitleSection>
                    <Text theme={helloTextTheme} text={'Hi, my name is'}/>
                    <Text theme={nameTextTheme} text={'Krzysztof Kucharski'}/>
                    <Text theme={softwareDevTextTheme} text={'I\'m a software engineer'}/>
                </StyledTitleSection>
                <StyledKeyboardImage src={'/assets/images/keyboard.png'} alt={'keyboard'}/>
            </StyledTopSection>
            <StyledBottomSection>
                <StyledLink href={"https://storage.googleapis.com/kkucharski-server/resume_public_2022.pdf"}
                                    rel="noopener noreferrer" target="_blank" download>
                    <Text theme={buttonTextTheme} text={'Resume'} />
                    <img style={{opacity: 0.8}} src={'/assets/images/pdf_icon.svg'} alt={'pdf_logo'} width={25}/>
                </StyledLink>
                <StyledLink href={"https://www.linkedin.com/in/kkuchar/"}>
                    <img style={{opacity: 0.8}} src={'/assets/images/linkedin_icon.svg'} alt={'linkedin_logo'} width={28}/>
                </StyledLink>
                <StyledLink href={"https://github.com/kkuchar2"}>
                    <img style={{opacity: 0.8}} src={'/assets/images/github_icon.svg'} alt={'github_logo'} width={28}/>
                </StyledLink>
            </StyledBottomSection>
        </StyledContent>
    </StyledMainPage>;
};

export default MainPage;