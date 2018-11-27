import React from "react";
import logo from "../img/logo-transparent.png";
import { withStyles, AppBar, Toolbar, Typography } from "@material-ui/core";
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
            <div>
                <img
                    src={logo}
                    alt="flava"
                    width={44}
                    style={{ marginRight: 8 }}
                />
            </div>

            <Typography
                variant="title"
                color="inherit"
                className={classes.grow}
                style={{ fontStyle: "italic" }}
            >
                <UnstyledLink to="/">Flava</UnstyledLink>
            </Typography>

            <LoginButtonContainer />
        </Toolbar>
    </AppBar>
);

export default withStyles(styles)(name);
