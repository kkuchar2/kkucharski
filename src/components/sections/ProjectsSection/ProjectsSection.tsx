import React, {useMemo} from 'react';

import {Text} from "kuchkr-react-component-library";

import {ProjectData} from "../../../data";
import {ProjectItem} from "../../items/ProjectItem/ProjectItem";
import {StyledTitle, titleTextTheme} from '../common.styles';
import {DataItems} from "../common.types";

import {StyledChildren, StyledProjectsSection} from "./style";

export const ProjectsSection = (props: DataItems<ProjectData>) => {

    const { items } = props;

    const renderItems = useMemo(() => {
        return items.map((item, index) => {
            return <ProjectItem key={index} {...item}/>;
        });
    }, [items]);

    return <StyledProjectsSection>
        <StyledTitle>
            <Text theme={titleTextTheme} text={'Projects'}/>
        </StyledTitle>
        <StyledChildren>
            {renderItems}
        </StyledChildren>
    </StyledProjectsSection>;
};