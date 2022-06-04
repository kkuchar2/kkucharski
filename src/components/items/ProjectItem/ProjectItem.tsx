import React, {useMemo} from "react"
import {
    linkNameTheme,
    projectDescriptionTextTheme,
    projectNameTheme,
    projectStackTheme,
    StyledDescription,
    StyledFirstLink,
    StyledLink,
    StyledLinks,
    StyledPersonalProjectItem,
    StyledPersonalProjectItemWrapper
} from "./style"
import {Text} from "kuchkr-react-component-library";
import {ProjectData} from "../../../data";

export const ProjectItem = (props: ProjectData) => {

    const { name, stack, description, github, website, npm } = props;

    const renderNPMLinkButton = useMemo(() => {
        if (!npm) {
            return null;
        }

        return <StyledLink href={npm}>
            <img src={'/images/npm_icon.svg'} alt={'npm_icon'} width={40} style={{ marginTop: 2 }}/>
        </StyledLink>
    }, [npm]);

    const renderWebsiteLinkButton = useMemo(() => {
        if (!website) {
            return null;
        }

        return <StyledLink href={website}>
            <Text theme={linkNameTheme} text={'Website'}/>
        </StyledLink>
    }, [website]);

    return <StyledPersonalProjectItemWrapper>
        <StyledPersonalProjectItem>
            <StyledDescription>
                <Text theme={projectNameTheme} text={name}/>
                <Text theme={projectStackTheme} text={stack}/>
                <Text theme={projectDescriptionTextTheme} text={description}/>
            </StyledDescription>

            <StyledLinks>
                <StyledFirstLink href={github}>
                    <img src={'/images/github_logo_wide.svg'} alt={'github_logo_wide'} width={70}/>
                </StyledFirstLink>
                {renderWebsiteLinkButton}
                {renderNPMLinkButton}
            </StyledLinks>
        </StyledPersonalProjectItem>
    </StyledPersonalProjectItemWrapper>
}