import React from "react";
import {
    withStyles,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import UnstyledLink from "./UnstyledLink";
import LoginButtonContainer from "../containers/LoginButtonContainer";

const styles = theme => ({
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    grow: {
        flexGrow: 1,
    },
});

const name = ({ classes }) => (
    <AppBar position="sticky">
        <Toolbar>
            <IconButton className={classes.menuButton} aria-label="Menu">
                <MenuIcon />
            </IconButton>

            <Typography
                variant="title"
                color="inherit"
                className={classes.grow}
            >
                <UnstyledLink to="/">Flava</UnstyledLink>
            </Typography>

            <LoginButtonContainer />
        </Toolbar>
    </AppBar>
);

export default withStyles(styles)(name);
