import React, {useMemo} from 'react';
import {StyledChildren, StyledWorkSection} from "./style"
import {Text} from "kuchkr-react-component-library";
import {StyledTitle, titleTextTheme} from '../common.styles';
import {DataItems} from "components/sections/common.types";
import {WorkData} from "../../../data";
import {WorkItem} from "components/items/WorkItem/WorkItem";

export const WorkSection = (props: DataItems<WorkData>) => {

    const {items} = props;

    const renderItems = useMemo(() => {
        return items.map((item, index) => {
            return <WorkItem key={index} {...item}/>
        })
    }, [items]);

    return <StyledWorkSection>
        <StyledTitle>
            <Text theme={titleTextTheme} text={'Work'}/>
        </StyledTitle>
        <StyledChildren>
            {renderItems}
        </StyledChildren>
    </StyledWorkSection>
}