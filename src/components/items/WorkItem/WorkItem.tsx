import React from "react"
import {
    companyTextTheme,
    jobDescriptionTextTheme,
    jobTimeTextTheme,
    jobTitleTextTheme,
    StyledLeftSide,
    StyledRightSide,
    StyledWorkItem,
} from "./style"
import {Text} from "kuchkr-react-component-library";

export interface WorkDescriptionProps {
    company: string;
    title: string;
    startTime: string;
    endTime: string;
    description: string;
    marginTop?: number;
}

export const WorkItem = (props: WorkDescriptionProps) => {

    const {company, title, startTime, endTime, description, marginTop = 0} = props;

    return <StyledWorkItem>
        <StyledLeftSide>
            <Text theme={companyTextTheme} text={company}/>
        </StyledLeftSide>

        <StyledRightSide>
            <Text theme={jobTimeTextTheme} text={`${startTime} - ${endTime}`}/>
            <Text theme={jobTitleTextTheme} text={title}/>
            <Text theme={jobDescriptionTextTheme} text={description}/>
        </StyledRightSide>
    </StyledWorkItem>
}