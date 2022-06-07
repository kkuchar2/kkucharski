import React from "react";

import {NavBarData} from "../../../data";

import {StyledNavBarItem, StyledNavBarItemSpan} from "./style";

interface NavBarItemProps {
    number: number;
}

export const NavBarItem = (props: NavBarData & NavBarItemProps) => {

    const { name, number } = props;

    return <StyledNavBarItem number={number}>
        <StyledNavBarItemSpan>{name}</StyledNavBarItemSpan>
    </StyledNavBarItem>;
};