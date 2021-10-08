import {withSuspense} from "./util/withSuspense";
import React from "react";

const MainPage =  React.lazy(() => import(/* webpackChunkName: "home" */ "pages/MainPage/MainPage"));

export const routes = [
    {
        path: "/",
        component: withSuspense(MainPage),
        icon: '',
        title: "",
        enabled: true,
        navbar: false,
        alignment: 'left',
        exact: true
    }
];

const getCurrentRoute = () => routes.filter(v => v.path === window.location.pathname)[0];