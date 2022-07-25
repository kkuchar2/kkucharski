import React, {useMemo} from 'react';

import {useTranslation} from "next-export-i18n";

import {InstitutionData} from "../../../data";
import {InstitutionItem} from "../../items/InstitutionItem";
import {StyledTitle} from '../common.styles';
import {DataItems, InstitutionProps} from "../common.types";

import {StyledChildren, StyledWorkSection} from "./style";

export const WorkSection = (props: DataItems<InstitutionData> & InstitutionProps) => {

    const { items, accentColorLight, accentColorDark } = props;

    const { t } = useTranslation();

    const renderItems = useMemo(() => items.map((item, index) => {
        return <InstitutionItem key={index}
                                accentColorLight={accentColorLight}
                                accentColorDark={accentColorDark}
                                {...item}/>;
    }), [items]);

    return <StyledWorkSection>
        <StyledTitle>{t('index.work.name')}</StyledTitle>
        <StyledChildren>{renderItems}</StyledChildren>
    </StyledWorkSection>;
};