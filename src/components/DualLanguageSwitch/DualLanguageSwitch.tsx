import React from 'react';

import {TranslateIcon} from "@heroicons/react/outline";

import LanguageSwitchButton from "components/LanguageSwitchButton/LanguageSwitchButton";

type DualLanguageSwitchProps = {
    firstLanguage: string,
    secondLanguage: string,
};

const DualLanguageSwitch = (props: DualLanguageSwitchProps) => {

    const { firstLanguage, secondLanguage } = props;

    return <div className={'flex h-full items-center'}>
        <TranslateIcon width={20} color={"rgba(255,255,255,0.21)"} className={'mt-[2px]'} />

        <LanguageSwitchButton lang={firstLanguage}/>
        |
        <LanguageSwitchButton lang={secondLanguage} />
    </div>
;
};

export default DualLanguageSwitch;