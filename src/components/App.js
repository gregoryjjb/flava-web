import React from "react";

import { withStyles, Typography } from "@material-ui/core";

const styles = theme => ({
    root: {
        background: theme.palette.primary.light,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
    },
    text: {
        color: theme.palette.getContrastText(theme.palette.primary.light),
    },
});

const App = ({ classes, message }) => (
    <div className={classes.root}>
        <Typography variant="display2" gutterBottom className={classes.text}>
            Welcome to Flavatown
        </Typography>
        <Typography variant="title">Hello there... {message}</Typography>
    </div>
);

export default withStyles(styles)(App);
