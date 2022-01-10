import React, { ReactNode } from 'react';
import {idTextTheme, StyledChildren, StyledSection, StyledTitle, titleTextTheme} from "./style"
import {Text} from "kuchkr-react-component-library";

export interface SectionProps {
    id: number;
    title: string;
    children?: ReactNode;
    paddingTop?: number;
    paddingBottom?: number;
    flexDirection?: string;
}

export const Section = (props: SectionProps) => {

    const {id, title, children, paddingTop, paddingBottom, flexDirection} = props;

    return <StyledSection>
        <StyledTitle>
            <Text theme={idTextTheme} text={id >= 0 && id <= 9 ? `0${id}.` : `{id}.`} style={{minWidth: 140}}/>
            <Text theme={titleTextTheme} text={title}/>
        </StyledTitle>
        <StyledChildren paddingBottom={paddingBottom} paddingTop={paddingTop} flexDirection={flexDirection}>
            {children}
        </StyledChildren>
    </StyledSection>
}