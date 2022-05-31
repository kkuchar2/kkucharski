import React from "react";
import {Text} from "kuchkr-react-component-library";
import {
    helloTextTheme,
    StyledContent,
    StyledDescriptionsSection,
    StyledWorkEducation,
    StyledLink,
    StyledMainPage,
    StyledTitle,
    StyledLinks, StyledLinkWrapper,
} from "./style";

import {WorkSection} from "components/sections/WorkSection/WorkSection";
import {EducationSection} from "components/sections/EducationSection/EducationSection";
import {AboutSection} from "components/sections/AboutSection/AboutSection";
import {ProjectsSection} from "components/sections/ProjectsSection/ProjectsSection";
import {education, projects, work} from "data";

const MainPage = () => {

    return <StyledMainPage>
        <StyledContent>
            <StyledTitle>
                <Text theme={helloTextTheme} text={'Hi, my name is Krzysztof Kucharski'}/>
            </StyledTitle>
            <StyledLinks>
                <StyledLinkWrapper>
                    <StyledLink href={"https://www.linkedin.com/in/kkuchar/"}>
                        <img style={{opacity: 0.8}} src={'/assets/images/linkedin_icon.svg'} alt={'linkedin_logo'}
                             width={22}/>
                    </StyledLink>
                </StyledLinkWrapper>
                <StyledLinkWrapper>
                    <StyledLink href={"https://github.com/kkuchar2"}>
                        <img style={{opacity: 0.8}} src={'/assets/images/github_icon.svg'} alt={'github_logo'}
                             width={22}/>
                    </StyledLink>
                </StyledLinkWrapper>
                <StyledLinkWrapper>
                        <StyledLink
                            href={"https://storage.googleapis.com/kkucharski-server/resume_public_2022.pdf"}
                            rel="noopener noreferrer" target="_blank" download>Resume</StyledLink>
                </StyledLinkWrapper>
            </StyledLinks>
            <StyledDescriptionsSection>
                <AboutSection/>
                <StyledWorkEducation>
                    <WorkSection items={work}/>
                    <EducationSection items={education}/>
                </StyledWorkEducation>
                <ProjectsSection items={projects}/>
            </StyledDescriptionsSection>
        </StyledContent>
    </StyledMainPage>
;
};

export default MainPage;