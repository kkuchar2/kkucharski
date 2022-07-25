import React, {useMemo} from 'react';

import {useTranslation} from 'next-export-i18n';

import {ProjectData} from "../../../data";
import {ProjectItem} from "../../items/ProjectItem/ProjectItem";
import {StyledTitle} from '../common.styles';
import {DataItems} from "../common.types";

import {StyledChildren} from "./style";

export const ProjectsSection = (props: DataItems<ProjectData>) => {

    const { items } = props;

    const { t } = useTranslation();

    const renderItems = useMemo(() => items.map((item, index) => <ProjectItem key={index} {...item}/>), [items]);

    return <div>
        <StyledTitle>{t('index.projects.name')}</StyledTitle>
        <StyledChildren>{renderItems}</StyledChildren>
    </div>;
};