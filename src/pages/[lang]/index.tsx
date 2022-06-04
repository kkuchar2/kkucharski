import {AboutSection} from "components/sections/AboutSection/AboutSection";
import {WorkSection} from "components/sections/WorkSection/WorkSection";
import {EducationSection} from "components/sections/EducationSection/EducationSection";
import {ProjectsSection} from "components/sections/ProjectsSection/ProjectsSection";

import meta from '../../../public/meta.json';

import {
    helloTextTheme,
    StyledBuildHash,
    StyledContent,
    StyledDescriptionsSection,
    StyledHome,
    StyledLink,
    StyledLinks,
    StyledLinkWrapper,
    StyledTitle,
    StyledWorkEducation,
} from "styles/MainPage";
import {education, projects, work} from "../../data";

import {Text} from "kuchkr-react-component-library";
import {getAllLanguageSlugs, getLanguage} from "../../i18n";
import Layout from "components/Layout";

const Home = ({language}) => {
    return <Layout>
        <StyledHome>
            <StyledContent>
                {/*<LanguageSelector/>*/}
                <StyledTitle>
                    <Text theme={helloTextTheme} text={'Hi, my name is Krzysztof Kucharski'}/>
                </StyledTitle>
                <StyledLinks>
                    <StyledLinkWrapper>
                        <StyledLink href={"https://www.linkedin.com/in/kkuchar/"}>
                            <img style={{opacity: 0.8}} src={'/images/linkedin_icon.svg'} alt={'linkedin_logo'}
                                 width={22}/>
                        </StyledLink>
                    </StyledLinkWrapper>
                    <StyledLinkWrapper>
                        <StyledLink href={"https://github.com/kkuchar2"}>
                            <img style={{opacity: 0.8}} src={'/images/github_icon.svg'} alt={'github_logo'}
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
        </StyledHome>
        <StyledBuildHash>{meta.buildHash}</StyledBuildHash>
    </Layout>;
}

export default Home

export async function getStaticPaths() {
    const paths = getAllLanguageSlugs()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params}) {
    const language = getLanguage(params.lang)
    return {
        props: {
            language,
        },
    }
}
