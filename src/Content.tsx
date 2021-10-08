import {Route, Switch} from "react-router-dom";
import React, {useCallback} from "react";
import {routes} from "./routes";

const Content = () => {
    const mapRoutesToContent = useCallback(() => routes.filter(v => v.enabled)
        .map((p, k) => {
            return <Route key={k} exact={p.exact} path={p.path} component={p.component}/>;
        }), []);

    return <Switch>
        {mapRoutesToContent()}
    </Switch>;
};

export default Content;