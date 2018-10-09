import React from "react";

import graphImg from "../img/graph.png";
import manRunning from "../img/running-man-sunset.jpg";

import {
    withStyles,
    Typography,
    AppBar,
    Toolbar,
    Button,
    IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import LoginButtonContainer from "../containers/LoginButtonContainer";

const styles = theme => ({
    root: {
        background: "#263238",
        padding: "24px 0",
    },
    container: {
        marginLeft: "20%",
        marginRight: "20%",
        display: "flex",
        flexDirection: "row",
    },
    header: {
        height: "20%",
        textAlign: "center",
    },
    bannerImg: {
        backgroundImage: `url(${manRunning})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        height: 450,
        display: "flex",
        flexDirection: "column-reverse",
    },
    bannerText: {
        background: "rgba(0,0,0,0.6)",
        padding: 16,
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
        background: `linear-gradient(45deg, ${
            theme.palette.secondary.main
        } 30%, ${theme.palette.primary.main} 90%)`,
        //borderRadius: 3,
        //border: 0,
        color: "white",
        height: 48,
        padding: "0 30px",
        //boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
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
                {/*<Button color="inherit">Login</Button>*/}
                <LoginButtonContainer />
            </Toolbar>
        </AppBar>
        <div className={classes.bannerImg}>
            <div className={classes.bannerText}>
                <Typography
                    variant="display4"
                    style={{ color: "white" }}
                    align="center"
                >
                    Welcome to Flava
                </Typography>
            </div>
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
        <div className={classes.root}>
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
