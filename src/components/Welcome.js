import React from "react";

import logo from "../img/logo-transparent.png";
import graphImg from "../img/graph.png";
import manRunning from "../img/running-man-sunset.jpg";
import { withStyles, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

const styles = theme => ({
    root: {
        background: theme.palette.primary.main,
        flexGrow: 1,
    },
    root2: {
        background: "#263238",
        padding: "24px 0",
    },
    container: {
        marginLeft: "20%",
        marginRight: "20%",
        display: "flex",
        flexDirection: "row",
    },
    logo: {
        height: "15%",
        width: "15%",
        float: "left",
    },
    header: {
        height: "20%",
        textAlign: "center",
    },
    sectionImg: {
        height: "auto",
        maxHeight: "100%",
        maxWidth: "100%",
        opacity: 0.7,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    message: {
        textAlign: "center",
        marginLeft: "20%",
        marginRight: "20%",
    },
    pinkMessage: {
        color: "#FCE4EC",
        textAlign: "center",
        marginLeft: "20%",
        marginRight: "20%",
    },
    graph: {
        width: "30%",
        margin: "16px",
    },
    img: {
        height: "auto",
        maxHeight: "100%",
        maxWidth: "100%",
    },
    getStarted: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 48,
        padding: "0 30px",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    },
});

const Welcome = ({ classes }) => (
    <div>
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
                    Flava
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        <div className={classes.header}>
            {/* <img src={logo} alt="" className={classes.logo} /> */}
            <Typography variant="display4" gutterBottom>
                Welcome to Flava
            </Typography>
        </div>
        <div style={{ textAlign: "center" }}>
            <img src={manRunning} alt="" className={classes.sectionImg} />
        </div>
        <Typography variant="display1" className={classes.message} gutterBottom>
            Flava is an application that uses machine learning to create a
            detailed training plan based on your current running abilities and
            your goals.
        </Typography>
        <div className={classes.container}>
            <div className={classes.graph}>
                <img src={graphImg} alt="" className={classes.img} />
            </div>
            <div className={classes.graph}>
                <img src={graphImg} alt="" className={classes.img} />
            </div>
            <div className={classes.graph}>
                <img src={graphImg} alt="" className={classes.img} />
            </div>
        </div>
        {/* Bottom Half (Dark BG) */}
        <div className={classes.root2}>
            <Typography
                variant="display1"
                className={classes.pinkMessage}
                gutterBottom
            >
                Flava will show statistics on your trajectory toward your goal.
            </Typography>
            <div className={classes.header}>
                <Button className={classes.getStarted}>Get started</Button>
            </div>
        </div>
    </div>
);

export default withStyles(styles)(Welcome);
