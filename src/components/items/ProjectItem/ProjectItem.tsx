import React, {useMemo} from "react";

import {ProjectData} from "../../../data";

import {
    ProjectContent,
    ProjectDescription,
    ProjectStacks,
    ProjectTitle,
    StyledLinks,
    StyledProjectItem,
    StyledProjectStack
} from "./style";

import {SvgIcon} from "components/SvgIcon/SvgIcon";
import {SvgIconLink} from "components/SvgIconLink/SvgIconLink";

const c = '#ffbe69';
export const ProjectItem = (props: ProjectData) => {

    const { name, icon, stack, description, github, website, npm } = props;

    const renderProjectStacks = useMemo(() => {
        return stack.map((stack, index) => <StyledProjectStack key={index}>{stack}</StyledProjectStack>);
    }, [stack]);

    return <StyledProjectItem>
        <SvgIcon
            className={`scale-150 absolute top-[18px] left-[25px] text-[#ffbe69]`}
            icon={icon ? icon : '/svg/folder.svg'}/>
        <StyledLinks>
            <SvgIconLink
                className={'fill-[#cecece] hover:fill-[#ffffff]'}
                href={github}
                target={'_blank'}
                icon={'/svg/github.svg'}/>
            <SvgIconLink
                className={'text-[#cecece] hover:text-[#ffffff] my-[-2px]'}
                href={website}
                target={'_blank'}
                icon={'/svg/external_link.svg'}/>
        </StyledLinks>
        <ProjectContent>
            <ProjectTitle>{name}</ProjectTitle>
            <ProjectDescription>{description}</ProjectDescription>
            <ProjectStacks>
                {renderProjectStacks}
            </ProjectStacks>
        </ProjectContent>
    </StyledProjectItem>;
};