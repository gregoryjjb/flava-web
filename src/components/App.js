import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core";

import Header from "./Header";
import WelcomePage from "../pages/WelcomePage";
import DashboardPage from "../pages/DashboardPage";

const styles = theme => ({
    root: {},
});

const App = ({ classes, message }) => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={WelcomePage} />
                <Route exact path="/dashboard" component={DashboardPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default withStyles(styles)(App);
