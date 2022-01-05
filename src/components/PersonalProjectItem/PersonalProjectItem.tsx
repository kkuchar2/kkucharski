import React, {useCallback} from "react"
import {
    linkNameTheme,
    projectNameTheme,
    projectStackDescription,
    projectStackTheme,
    StyledDescription,
    StyledFirstLink,
    StyledLink,
    StyledLinks,
    StyledPersonalProjectItem,
    StyledProjectImage
} from "./style"
import {Text} from "kuchkr-react-component-library";

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export interface PersonalProjectItemProps {
    projectName: string;
    projectStack: string;
    projectDescription: string;
    githubLink: string;
    websiteName?: string;
    npmLink?: string;
    imageUrl?: string;
}

export const PersonalProjectItem = (props: PersonalProjectItemProps) => {

    const {projectName, projectStack, projectDescription, githubLink, websiteName, npmLink, imageUrl} = props;

    const renderNPMLinkButton = useCallback(() => {
        if (!npmLink) {
            return null;
        }

        return <StyledLink href={npmLink}>
            <img src={'/assets/images/npm_icon.svg'} alt={'npm_icon'} width={40} style={{marginTop: 2}}/>
        </StyledLink>
    }, [npmLink]);

    const renderWebsiteLinkButton = useCallback(() => {
        if (!websiteName) {
            return null;
        }

        return <StyledLink href={websiteName}>
            <Text theme={linkNameTheme} text={'Website'}/>
        </StyledLink>
    }, [websiteName]);

    const renderImage = useCallback(() => {
        if (!imageUrl || imageUrl === '') {
            return null;
        }

        return <Zoom overlayBgColorStart={'#00000000'} overlayBgColorEnd={'#00000000'}>
            <StyledProjectImage src={imageUrl}/>
        </Zoom>
    }, [imageUrl]);

    return <StyledPersonalProjectItem>
        <StyledDescription>
            <Text theme={projectNameTheme} text={projectName}/>
            <Text theme={projectStackTheme} text={projectStack}/>
            <Text theme={projectStackDescription} text={projectDescription}/>
        </StyledDescription>
        {renderImage()}
        <StyledLinks>
            <StyledFirstLink href={githubLink}>
                <img src={'/assets/images/github_logo_wide.svg'} alt={'github_logo_wide'} width={70}/>
            </StyledFirstLink>
            {renderWebsiteLinkButton()}
            {renderNPMLinkButton()}
        </StyledLinks>
    </StyledPersonalProjectItem>
}