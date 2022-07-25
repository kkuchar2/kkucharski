import React, {useEffect} from "react";

import {Text, useColorMode} from '@chakra-ui/react';

import {InstitutionData} from "../../data";

import {InstitutionProps} from "components/sections/common.types";

export const InstitutionItem = (props: InstitutionData & InstitutionProps) => {

    const { institution, title, startTime, endTime, description, accentColorDark, accentColorLight } = props;

    const { colorMode } = useColorMode();

    useEffect(() => {
        const theme = localStorage.getItem('chakra-ui-color-mode') || 'light';
        if (theme === colorMode) {
            document.querySelector('html').style
                .setProperty('background', colorMode === 'dark' ? '#272727' : '#ffffff');
        }
    }, [colorMode]);

    return <div className={'grid box-border gap-[10px]'}>
        <div className={'flex flex-grow-1 min-w-[200px]'}>
            <Text fontSize={'xl'}
                  transition={"color 2000ms linear"}
                  fontWeight={'semibold'}
                  color={colorMode === 'light' ? accentColorLight : accentColorDark}>
                {institution}
            </Text>
        </div>

        <div className={'flex flex-col min-w-0'}>
            <Text fontSize='lg' fontWeight='bold' color='#c0c0c0'
                  className={'mb-[10px]'}>{`${startTime} - ${endTime}`}</Text>
            <Text className={'text-[#ffffff] text-[1em] font-semibold mb-[10px]'}>{title}</Text>
            <Text className={'text-[#c0c0c0] text-[0.9em] font-normal mt-[20px]'}>{description}</Text>
        </div>
    </div>;
};