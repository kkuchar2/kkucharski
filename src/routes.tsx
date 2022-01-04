import React, {lazy} from "react";

const MainPage = lazy(() => import (/* webpackChunkName: "main-page" */ "pages/MainPage/MainPage"));
const NotFound = lazy(() => import (/* webpackChunkName: "not-found" */ "pages/NotFoundPage/NotFoundPage"));

export const routes = [
    {
        path: "*",
        element: <NotFound />,
        enabled: true
    },
    {
        path: "/",
        element: <MainPage />,
        icon: '',
        title: "",
        enabled: true,
        exact: true,
        authRequired: false,
        hiddenForAuthenticated: false
    }
];

const getCurrentRoute = () => routes.filter(v => v.path === window.location.pathname)[0];

export const isOnAuthenticatedPage = () => {
    const route = getCurrentRoute();

    if (route) {
        return route.authRequired;
    }
    return false;
};