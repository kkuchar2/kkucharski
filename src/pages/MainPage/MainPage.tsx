import React from "react";
import {Text} from "kuchkr-react-component-library";
import {
    AboutMe,
    aboutTextTheme,
    aboutTextTheme2,
    buttonTextTheme,
    helloTextTheme,
    StyledBottomSection,
    StyledContent,
    StyledDescriptionsSection,
    StyledKeyboardImage,
    StyledLink,
    StyledLinkBottomSection,
    StyledLinkSection,
    StyledLinkTopSection,
    StyledMainPage,
    StyledResumeLink,
    StyledSectionGrid,
    StyledTitleSection,
    StyledTopSection,
} from "./style";

import {Section} from "components/Section/Section";
import {WorkDescriptionItem} from "components/WorkDescriptionItem/WorkDescriptionItem";
import {PersonalProjectItem} from "components/PersonalProjectItem/PersonalProjectItem";
import Typewriter from 'typewriter-effect';

const MainPage = () => {

    return <StyledMainPage>

        <StyledContent>
            <StyledTopSection>
                <StyledTitleSection>
                    <Text theme={helloTextTheme} text={'Hi, my name is'}/>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Krzysztof Kucharski')
                                .pauseFor(2500)
                                .start();
                        }}
                    />
                </StyledTitleSection>
                <StyledKeyboardImage src={'/assets/images/keyboard.png'} alt={'keyboard'}/>
            </StyledTopSection>
            <StyledBottomSection>
                <StyledLinkSection>
                    <StyledLinkTopSection>
                        <StyledLink href={"https://www.linkedin.com/in/kkuchar/"}>
                            <img style={{opacity: 0.8}} src={'/assets/images/linkedin_icon.svg'} alt={'linkedin_logo'}
                                 width={28}/>
                        </StyledLink>
                        <StyledLink href={"https://github.com/kkuchar2"}>
                            <img style={{opacity: 0.8}} src={'/assets/images/github_icon.svg'} alt={'github_logo'}
                                 width={28}/>
                        </StyledLink>
                    </StyledLinkTopSection>
                    <StyledLinkBottomSection>
                        <StyledResumeLink
                            href={"https://storage.googleapis.com/kkucharski-server/resume_public_2022.pdf"}
                            rel="noopener noreferrer" target="_blank" download>
                            <Text theme={buttonTextTheme} text={'Resume'}/>
                        </StyledResumeLink>
                    </StyledLinkBottomSection>
                </StyledLinkSection>
                <StyledDescriptionsSection>
                    <Section id={1} title={'About'}>
                        <AboutMe>
                            <Text theme={aboutTextTheme}
                                  text={'I do like picking different programming projects - anything is fun!'}/>
                            <Text theme={aboutTextTheme2}
                                  text={'I\'ve been working with Java frontend applications, Android AR Applications, Unity with AR Core, Django ' +
                                      'and currently I\'m focusing on ReactJS'}/>
                        </AboutMe>
                    </Section>
                    <Section id={2} title={'Work'}>
                        <WorkDescriptionItem
                            company={'Goldman Sachs'}
                            title={'Analyst & Associate'}
                            startTime={'April 2020'}
                            endTime={'Present'}
                            description={'Maintaining and developing features for financial platform based on microservices architecture. (Java, SLANG, ReactJS).'}/>
                        <WorkDescriptionItem
                            company={'Samsung R&D Institute Poland'}
                            title={'Software Engineer'}
                            startTime={'January 2018'}
                            endTime={'Software Engineer'}
                            description={'Augmented Reality research for Visual Entertainment team. Android applications with Unity and ARCore'}
                            marginTop={100}/>
                    </Section>
                    <Section id={3} title={'Personal experience / projects'} paddingBottom={50} paddingTop={50}>
                        <StyledSectionGrid>
                            <PersonalProjectItem
                                projectName={'kuchkr-react-component-library'}
                                projectStack={'ReactJS, TypeScript, RollupJS, StoryBook, Firebase'}
                                projectDescription={'Small React components library for personal usage'}
                                githubLink={'https://github.com/kkuchar2/kuchkr-react-component-library'}
                                websiteName={'https://components.kkucharski.com/'}
                                npmLink={'https://www.npmjs.com/package/kuchkr-react-component-library'}
                                imageUrl={'/assets/images/components_lib.png'}
                            />
                            <PersonalProjectItem
                                projectName={'openglengine'}
                                projectStack={'C++, CMake'}
                                projectDescription={'Project as integration of OpenGL rendering system into graphical user interface. Used for testing, learning and experimentation.'}
                                githubLink={'https://github.com/kkuchar2/openglengine'}
                                imageUrl={'/assets/images/openglengine.png'}
                            />
                            <PersonalProjectItem
                                projectName={'react-sorting-visualiser'}
                                projectStack={'ReactJS, TypeScript, Webpack, webworkers, ThreeJS, Firebase'}
                                projectDescription={'Realtime sorting algorithm visualiser'}
                                githubLink={'https://github.com/kkuchar2/react-sorting-visualizer'}
                                websiteName={'https://sortingvis.kkucharski.com/'}
                                imageUrl={'/assets/images/sorting_vis.png'}
                            />
                            <PersonalProjectItem
                                projectName={'react-django-administration'}
                                projectStack={'ReactJS, TypeScript, Webpack, Firebase'}
                                projectDescription={'React frontend for Django server to manage accounts and tables'}
                                githubLink={'https://github.com/kkuchar2/react-django-administration'}
                                imageUrl={'/assets/images/react_admin.png'}
                            />
                            <PersonalProjectItem
                                projectName={'axios-client-wrapper'}
                                projectStack={'ReactJS, TypeScript, RollupJS, StoryBook'}
                                projectDescription={'Small library for personal usage wrapping axios library with Redux functionality. '}
                                githubLink={'https://github.com/kkuchar2/axios-client-wrapper'}
                                npmLink={'https://www.npmjs.com/package/axios-client-wrapper'}
                                imageUrl={'/assets/images/axios_github.png'}
                            />
                            <PersonalProjectItem
                                projectName={'docker-django-backend'}
                                projectStack={'Docker, docker-compose, Django, MySQL, DigitalOcean, Google Cloud Storage'}
                                projectDescription={'Django server & MySQL database in Docker - API and data source for all of my future projects'}
                                githubLink={'https://github.com/kkuchar2/kuchkr-react-component-library'}
                                imageUrl={'/assets/images/api_kkucharski.png'}
                            />
                            <PersonalProjectItem
                                projectName={'libmpeg7'}
                                projectStack={'C++, C, Python, Java, JNI'}
                                projectDescription={'🎓 Engineers degree project: Library with implementation of MPEG-7 digital image descriptors calculation and comparison algorithms with Python and Java wrappers'}
                                githubLink={'https://github.com/kkuchar2/libmpeg7'}
                                imageUrl={'/assets/images/mpeg7.png'}
                            />
                            {/*<PersonalProjectItem*/}
                            {/*    projectName={'binaryarithmeticcodec'}*/}
                            {/*    projectStack={'C++'}*/}
                            {/*    projectDescription={'Implementation of binary arithmetic codec done at university'}*/}
                            {/*    githubLink={'https://github.com/kkuchar2/binaryarithmeticcodec'}*/}
                            {/*/>*/}
                        </StyledSectionGrid>
                    </Section>
                    <Section id={4} title={'Education'} flexDirection={'column'}>
                        <WorkDescriptionItem
                            company={'Warsaw Univeristy of Technology'}
                            title={'Bachelor of Science in Engineering, Telecommunication'}
                            startTime={'2012'}
                            endTime={'2015'}
                            description={'MPEG-7 library for image classification (C++, Java, Python, JNI, ctypes)'}/>

                        <WorkDescriptionItem
                            marginTop={100}
                            company={'Warsaw Univeristy of Technology'}
                            title={'Master of Science in Engineering, Telecommunication'}
                            startTime={'2015'}
                            endTime={'2017'}
                            description={'Remote objects recognition in images with CNN (Python, Java, caffee, mxnet)'}/>
                    </Section>
                </StyledDescriptionsSection>
            </StyledBottomSection>
        </StyledContent>
    </StyledMainPage>;
};


export default MainPage;