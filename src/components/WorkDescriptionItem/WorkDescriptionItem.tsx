import React from "react"
import {
    companyTextTheme,
    jobDescriptionTextTheme,
    jobTimeTextTheme,
    jobTitleTextTheme,
    StyledLeftSide,
    StyledRightSide,
    StyledWorkDescription,
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

export const WorkDescriptionItem = (props: WorkDescriptionProps) => {

    const {company, title, startTime, endTime, description, marginTop = 0} = props;

    return <StyledWorkDescription style={{marginTop: marginTop}}>
        <StyledLeftSide>
            <Text theme={companyTextTheme} text={company}/>
        </StyledLeftSide>

        <StyledRightSide>
            <Text theme={jobTitleTextTheme} text={title}/>
            <Text theme={jobTimeTextTheme} text={`${startTime} - ${endTime}`}/>
            <Text theme={jobDescriptionTextTheme} text={description}/>
        </StyledRightSide>
    </StyledWorkDescription>
}