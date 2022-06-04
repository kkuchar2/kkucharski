import React, {useMemo} from 'react';
import {StyledChildren, StyledProjectsSection} from "./style"
import {Text} from "kuchkr-react-component-library";
import {StyledTitle, titleTextTheme} from '../common.styles';
import {DataItems} from "../common.types";
import {ProjectItem} from "../../items/ProjectItem/ProjectItem";
import {ProjectData} from "../../../data";

export const ProjectsSection = (props: DataItems<ProjectData>) => {

    const { items } = props;

    const renderItems = useMemo(() => {
        return items.map((item, index) => {
            return <ProjectItem key={index} {...item}/>
        })
    }, [items]);

    return <StyledProjectsSection>
        <StyledTitle>
            <Text theme={titleTextTheme} text={'Personal projects'}/>
        </StyledTitle>
        <StyledChildren>
            {renderItems}
        </StyledChildren>
    </StyledProjectsSection>
}