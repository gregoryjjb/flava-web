import React from "react";
import { withStyles } from "@material-ui/core";

import Header from "./Header";
import WelcomePage from "../pages/WelcomePage";

const styles = theme => ({
    root: {},
});

const App = ({ classes, message }) => (
    <div>
        <Header />
        <WelcomePage />
    </div>
);

export default withStyles(styles)(App);
