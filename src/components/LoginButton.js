import React from "react";
import GoogleLogin from "react-google-login";

import { withStyles } from "@material-ui/core";

import googleImg from "../img/btn_google_signin_light_normal_web.png";

const styles = theme => ({
    root: {
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        height: 46,
    },
});

const LoginButton = ({ classes, clientId, onSuccess, onFailure }) => (
    <GoogleLogin
        clientId={clientId}
        className={classes.root}
        onSuccess={onSuccess}
        onFailure={onFailure}
    >
        <img src={googleImg} atl="Sign in with Google" />
    </GoogleLogin>
);

export default withStyles(styles)(LoginButton);
