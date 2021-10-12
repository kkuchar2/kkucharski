import React, {useState} from 'react';
import {
    StyledAboutMe,
    StyledAboutMeDescription,
    StyledAboutMeImage,
    StyledMainPage,
    StyledMe,
    StyledTitle,
    StyledTitleHello,
    StyledTitleWrapper
} from "./style";
import Typewriter from 'typewriter-effect';
import Background from 'pages/Background';
import {useViewportScroll} from "framer-motion";
import Section from "../../components/Section/Section";
import Navbar from "../../components/Navbar/Navbar";

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
}

const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Sed lectus vestibulum mattis ullamcorper velit sed. Nec nam aliquam sem et tortor. Elit eget gravida cum sociis natoque. Ipsum a arcu cursus vitae. Massa sapien faucibus et molestie ac feugiat sed. Turpis egestas maecenas pharetra convallis posuere morbi leo. Duis at consectetur lorem donec massa sapien faucibus et molestie. Purus sit amet luctus venenatis lectus. Pellentesque nec nam aliquam sem et tortor consequat id porta. Sapien et ligula ullamcorper malesuada. Fringilla ut morbi tincidunt augue interdum velit euismod. Vitae turpis massa sed elementum tempus egestas sed. Netus et malesuada fames ac turpis egestas integer eget aliquet. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.

Nisi est sit amet facilisis. Vitae congue eu consequat ac felis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Nisl condimentum id venenatis a condimentum. Rutrum tellus pellentesque eu tincidunt tortor. Semper auctor neque vitae tempus quam. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Enim lobortis scelerisque fermentum dui faucibus. Volutpat ac tincidunt vitae semper quis lectus nulla at.

Pellentesque id nibh tortor id aliquet lectus proin. Blandit cursus risus at ultrices mi. Iaculis eu non diam phasellus vestibulum lorem. Et odio pellentesque diam volutpat commodo. Sodales ut etiam sit amet nisl purus in. Adipiscing elit ut aliquam purus sit. Bibendum enim facilisis gravida neque convallis a cras. Duis at consectetur lorem donec massa sapien faucibus et molestie. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Non odio euismod lacinia at quis risus sed vulputate odio. Vel turpis nunc eget lorem dolor sed viverra ipsum. A lacus vestibulum sed arcu.

Odio aenean sed adipiscing diam. Volutpat ac tincidunt vitae semper quis lectus. Tristique magna sit amet purus. Euismod in pellentesque massa placerat duis. Tellus molestie nunc non blandit massa enim nec dui nunc. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Ac felis donec et odio pellentesque diam volutpat commodo sed. Orci sagittis eu volutpat odio. Purus faucibus ornare suspendisse sed nisi lacus. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Habitant morbi tristique senectus et netus et. Porta non pulvinar neque laoreet suspendisse. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Tellus integer feugiat scelerisque varius. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Pharetra et ultrices neque ornare aenean euismod. Proin sagittis nisl rhoncus mattis rhoncus.

Nisi quis eleifend quam adipiscing vitae. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Non arcu risus quis varius quam quisque id diam. Pharetra magna ac placerat vestibulum. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Sed id semper risus in hendrerit gravida. Ultrices eros in cursus turpis massa. Non tellus orci ac auctor augue mauris augue. Arcu vitae elementum curabitur vitae nunc. Convallis a cras semper auctor neque vitae tempus quam. Varius quam quisque id diam vel.`;


const MainPage = () => {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    const {scrollY} = useViewportScroll();
    const [scrollOffsetY, setScrollOfsetY] = useState(0);

    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(500);
    const [aboutMeVisible, setAboutMeVisible] = useState(false);

    scrollY.onChange((value) => {

        setScrollOfsetY(value);

        if (value < 100) {
            if (offsetY !== 500) {
                setOffsetY(500);
            }

            if (offsetX !== 0) {
                setOffsetX(0);
            }

            if (setAboutMeVisible) {
                setAboutMeVisible(false);
            }
        } else if (value > 100) {
            setOffsetY(700);
            setOffsetX(0);
            setAboutMeVisible(true);
        }
    });

    return <StyledMainPage>
        <Background/>
        {/*<StyledNavbar opacity={scrollOffsetY > 450 ? 1 : 0}/>*/}
        <StyledTitleWrapper position={'relative'} offsetY={`${offsetY}px`} offsetX={`${offsetX}px`}>
            <StyledTitleHello>Hello</StyledTitleHello>

            <StyledMe>
                <StyledTitle>I'm Krzysztof Kucharski</StyledTitle>
                <Typewriter
                    options={{
                        strings: ['I\'m a Software Engineer', 'I love️ React', 'Frontend Developer'],
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
        <StyledAboutMe opacity={aboutMeVisible ? 1 : 0}>
            <StyledAboutMeImage left={scrollOffsetY > 300 ? '0px' : '-100px'}>
                <img src={'assets/images/profile.png'}/>
            </StyledAboutMeImage>
            <StyledAboutMeDescription>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
                Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
                undoubtable source.
            </StyledAboutMeDescription>
        </StyledAboutMe>
        <Navbar/>
        <Section
            title="Section 1"
            subtitle={dummyText}
            dark={true}
            id="section1"
        />
        <Section
            title="Section 2"
            subtitle={dummyText}
            dark={false}
            id="section2"
        />
        <Section
            title="Section 3"
            subtitle={dummyText}
            dark={true}
            id="section3"
        />
        <Section
            title="Section 4"
            subtitle={dummyText}
            dark={false}
            id="section4"
        />
        <Section
            title="Section 5"
            subtitle={dummyText}
            dark={true}
            id="section5"
        />
    </StyledMainPage>;
};

export default MainPage;