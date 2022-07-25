import React, {useMemo} from 'react';

import {useLanguageQuery, useLanguageSwitcherIsActive} from "next-export-i18n";
import {useRouter} from 'next/router';

type LanguageSwitchButtonProps = {
    lang: string,
};

const LanguageSwitchButton = (props: LanguageSwitchButtonProps) => {

    const {lang} = props;

    const { isActive: languageSwitcherIsActive } = useLanguageSwitcherIsActive(lang);

    const router = useRouter();

    const [query] = useLanguageQuery(lang);

    const setLanguage = () => {
        router.push({ pathname: router.pathname, query: query, }, undefined, {
                shallow: false,
                scroll: false
            }
        );
    };

    const styleClass = useMemo(() => {
        if (languageSwitcherIsActive) {
            return 'text-white pointer-events-none h-full w-[50px]';
        }
        return 'text-gray-500 hover:text-gray-200 h-full h-full w-[50px]';
    }, [languageSwitcherIsActive]);

    return <button data-is-current={languageSwitcherIsActive} className={styleClass} onClick={() => setLanguage()}>
        {lang}
    </button>;
};

export default LanguageSwitchButton;