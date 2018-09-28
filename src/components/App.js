import React from "react";

import { withStyles, Typography } from "@material-ui/core";
import Welcome from "./Welcome";

const styles = theme => ({
    root: {
        background: theme.palette.primary.light,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        padding: 0,
    },
    text: {
        color: theme.palette.getContrastText(theme.palette.primary.light),
    },
    typography: {
        fontFamily: "Poor Story",
    },
});

const App = ({ classes, message }) => (
    <div>
        <Welcome />
    </div>
);

export default withStyles(styles)(App);
