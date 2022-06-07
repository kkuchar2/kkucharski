import React from "react";

import {Text} from "kuchkr-react-component-library";

import {
    companyTextTheme,
    jobDescriptionTextTheme,
    jobTimeTextTheme,
    jobTitleTextTheme,
    StyledLeftSide,
    StyledRightSide,
    StyledWorkItem,
} from "./style";

export interface WorkDescriptionProps {
    company: string;
    title: string;
    startTime: string;
    endTime: string;
    description: string;
}

export const WorkItem = (props: WorkDescriptionProps) => {

    const { company, title, startTime, endTime, description } = props;

    return <StyledWorkItem>
        <StyledLeftSide>
            <Text theme={companyTextTheme} text={company}/>
        </StyledLeftSide>

        <StyledRightSide>
            <Text theme={jobTimeTextTheme} text={`${startTime} - ${endTime}`}/>
            <Text theme={jobTitleTextTheme} text={title}/>
            <Text theme={jobDescriptionTextTheme} text={description}/>
        </StyledRightSide>
    </StyledWorkItem>;
};