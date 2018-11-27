import React from "react";

import graphImg from "../img/graph.png";
import manRunning from "../img/running-man-sunset.jpg";

import { withStyles, Typography, Button } from "@material-ui/core";

import Gutters from "../components/Gutters";

const styles = theme => ({
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
    textSize: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "5rem",
        },
    },
    graphRow: {
        display: "flex",
        flexDirection: "row",
    },
    graphCol: {
        flex: "33.3%",
        margin: "16px",
    },
    graphImg: {
        height: "auto",
        maxHeight: "100%",
        maxWidth: "100%",
    },
    footer: {
        background: "#263238",
        textAlign: "center",
    },
    pinkMessage: {
        color: theme.palette.secondary.light, // "#FCE4EC",
        textAlign: "center",
    },
    getStarted: {
        background: `linear-gradient(45deg, ${
            theme.palette.secondary.main
        } 30%, ${theme.palette.primary.main} 90%)`,
        color: "white",
        height: 48,
        padding: "0 30px",
        margin: 16,
    },
});

const WelcomePage = ({ classes }) => (
    <div>
        <div className={classes.bannerImg}>
            <div className={classes.bannerText}>
                <Typography
                    variant="h1"
                    style={{ color: "white" }}
                    align="center"
                    className={classes.textSize}
                >
                    Welcome to Flava
                </Typography>
            </div>
        </div>
        <Gutters top bottom>
            <Typography variant="display1" align="center" gutterBottom>
                Flava is an application that uses machine learning to create a
                detailed training plan based on your current running abilities
                and your goals.
            </Typography>
            <div className={classes.graphRow}>
                <div className={classes.graphCol}>
                    <img src={graphImg} alt="" className={classes.graphImg} />
                </div>
                <div className={classes.graphCol}>
                    <img src={graphImg} alt="" className={classes.graphImg} />
                </div>
                <div className={classes.graphCol}>
                    <img src={graphImg} alt="" className={classes.graphImg} />
                </div>
            </div>
        </Gutters>
        {/* Bottom Half (Dark BG) */}
        <div className={classes.footer}>
            <Gutters top bottom>
                <Typography
                    variant="display1"
                    className={classes.pinkMessage}
                    gutterBottom
                >
                    Flava will show statistics on your trajectory toward your
                    goal.
                </Typography>
                <Button className={classes.getStarted}>Get started</Button>
            </Gutters>
        </div>
    </div>
);

export default withStyles(styles)(WelcomePage);
