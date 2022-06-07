import {useCallback, useEffect} from "react";

import {disablePageScroll, enablePageScroll} from 'scroll-lock';

import meta from '../../../public/meta.json';
import {useAppContext} from "../../context/state";
import {education, navbarData, projects, work} from "../../data";
import {getAllLanguageSlugs, getLanguage} from "../../i18n";

import NavBar from "components/NavBar/NavBar";
import {AboutSection} from "components/sections/AboutSection/AboutSection";
import {EducationSection} from "components/sections/EducationSection/EducationSection";
import {ProjectsSection} from "components/sections/ProjectsSection/ProjectsSection";
import {WorkSection} from "components/sections/WorkSection/WorkSection";
import WithLanguageLayout from "components/WithLanguageLayout";
import {
    StyledBuildHash,
    StyledContent,
    StyledDescriptionsSection,
    StyledHome,
    StyledTitle,
    StyledTitleBox,
    StyledWorkEducation,
} from "styles/MainPage";

const Home = ({ language }) => {

    const [navbarOpened, setNavbarOpened] = useAppContext();

    const onPageClick = useCallback(() => {
        if (navbarOpened) {
            setNavbarOpened(false);
        }
    }, [navbarOpened]);

    useEffect(() => {
        if (navbarOpened) {
            disablePageScroll();
        }
        else {
            enablePageScroll();
        }
    }, [navbarOpened]);

    return <WithLanguageLayout>
        <NavBar items={navbarData}/>
        <StyledHome opened={navbarOpened} onClick={onPageClick}>
            <StyledContent opened={navbarOpened}>
                {/*<LanguageSelector/>*/}
                <StyledTitleBox>
                    <StyledTitle>{'Hi. I\'m Krzysztof.'}</StyledTitle>
                    <AboutSection/>
                </StyledTitleBox>
                <StyledDescriptionsSection>
                    <StyledWorkEducation>
                        <WorkSection items={work}/>
                        <EducationSection items={education}/>
                    </StyledWorkEducation>
                    <ProjectsSection items={projects}/>
                </StyledDescriptionsSection>
            </StyledContent>
        </StyledHome>
        <StyledBuildHash>{meta.buildHash}</StyledBuildHash>
    </WithLanguageLayout>;
};

export default Home;

export async function getStaticPaths() {
    const paths = getAllLanguageSlugs();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const language = getLanguage(params.lang);
    return {
        props: {
            language,
        },
    };
}
