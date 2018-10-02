import React, { Component } from "react";

import LoginButton from "../components/LoginButton";

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

class LoginButtonContainer extends Component {
    constructor(props) {
        super(props);

        if (!googleClientId) {
            console.warn("Google client ID not specified");
        } else {
            console.log("Client ID:", googleClientId);
        }
    }

    onSuccess = response => {
        console.log("Token ID:", response.tokenId);
    };

    onFailure = response => {
        console.log(response);
    };

    render() {
        return (
            <LoginButton
                clientId={googleClientId}
                onSuccess={this.onSuccess}
                onFailure={this.onFailure}
            />
        );
    }
}

export default LoginButtonContainer;
