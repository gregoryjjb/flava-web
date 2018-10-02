import React from "react";
import GoogleLogin from "react-google-login";

import { withStyles } from "@material-ui/core";

const styles = theme => ({
    root: {},
});

const LoginButton = ({ classes, clientId, onSuccess, onFailure }) => (
    <GoogleLogin
        clientId={clientId}
        className={classes.root}
        onSuccess={onSuccess}
        onFailure={onFailure}
    />
);

export default withStyles(styles)(LoginButton);
