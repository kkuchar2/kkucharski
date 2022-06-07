import React, {useMemo} from 'react';

import {Text} from "kuchkr-react-component-library";

import {EducationData} from "../../../data";
import {EducationItem} from "../../items/EducationItem/EducationItem";
import {StyledTitle, titleTextTheme} from '../common.styles';
import {DataItems} from "../common.types";

import {StyledChildren, StyledEducationSection} from "./style";

export const EducationSection = (props: DataItems<EducationData>) => {

    const { items } = props;

    const renderItems = useMemo(() => {
        return items.map((item, index) => {
            return <EducationItem key={index} {...item}/>;
        });
    }, [items]);

    return <StyledEducationSection>
        <StyledTitle>
            <Text theme={titleTextTheme} text={'Education'}/>
        </StyledTitle>
        <StyledChildren>
            {renderItems}
        </StyledChildren>
    </StyledEducationSection>;
};