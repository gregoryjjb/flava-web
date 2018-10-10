import React from "react";
import { Route, Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core";

import Header from "./Header";
import WelcomePage from "../pages/WelcomePage";
import DashboardPage from "../pages/DashboardPage";

const styles = theme => ({
    root: {},
});

const App = ({ classes, message }) => (
    <div>
        <Header />
        <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/dashboard" component={DashboardPage} />
        </Switch>
    </div>
);

export default withStyles(styles)(App);
