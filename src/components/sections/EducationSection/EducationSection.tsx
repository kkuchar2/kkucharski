import React, {useMemo} from 'react';

import {useTranslation} from 'next-export-i18n';

import {InstitutionData} from "../../../data";
import {InstitutionItem} from "../../items/InstitutionItem";
import {StyledTitle} from '../common.styles';
import {DataItems, InstitutionProps} from "../common.types";

import {StyledChildren, StyledEducationSection} from "./style";

export const EducationSection = (props: DataItems<InstitutionData> & InstitutionProps) => {

    const { items, accentColorDark, accentColorLight } = props;

    const { t } = useTranslation();

    const renderItems = useMemo(() => items.map((item, index) => {
        return <InstitutionItem key={index}
                                accentColorLight={accentColorLight}
                                accentColorDark={accentColorDark}
                                {...item}/>;
    }), [items]);

    return <StyledEducationSection>
        <StyledTitle>{t('index.education.name')}</StyledTitle>
        <StyledChildren>{renderItems}</StyledChildren>
    </StyledEducationSection>;
};