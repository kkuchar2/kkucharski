import React, {useMemo} from 'react';

import {Text} from "kuchkr-react-component-library";

import {WorkData} from "../../../data";
import {WorkItem} from "../../items/WorkItem/WorkItem";
import {StyledTitle, titleTextTheme} from '../common.styles';
import {DataItems} from "../common.types";

import {StyledChildren, StyledWorkSection} from "./style";

export const WorkSection = (props: DataItems<WorkData>) => {

    const { items } = props;

    const renderItems = useMemo(() => {
        return items.map((item, index) => {
            return <WorkItem key={index} {...item}/>;
        });
    }, [items]);

    return <StyledWorkSection>
        <StyledTitle>
            <Text theme={titleTextTheme} text={'Work'}/>
        </StyledTitle>
        <StyledChildren>
            {renderItems}
        </StyledChildren>
    </StyledWorkSection>;
};