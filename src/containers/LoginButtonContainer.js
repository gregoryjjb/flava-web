import React, { Component } from "react";
import Cookies from "js-cookie";
import { CircularProgress } from "@material-ui/core";

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

        this.state = {
            sessionKey: "",
            isFetching: false,
        };
    }

    componentDidMount() {
        const key = Cookies.get("sessionKey");

        if (key) {
            this.setState({ isFetching: true });

            fetch("/api/account/login", {
                method: "POST",
                headers: { "Content-Type": "application/json; charset=utf-8" },
                body: JSON.stringify({ sessionKey: key }),
            })
                .then(res => res.json())
                .then(res => {
                    if (!res.user) {
                        this.setState({ sessionKey: "" });
                        Cookies.remove("sessionKey");
                        console.log("Not logged in");
                    } else {
                        this.setState({ sessionKey: key });
                    }

                    this.setState({ isFetching: false });
                })
                .catch(e => {
                    this.setState({ isFetching: false });
                });
        }
    }

    onSuccess = response => {
        const token = response.tokenId;
        console.log("Token ID:", token);

        const body = { token };

        this.setState({ isFetching: true });

        fetch("/api/account/login", {
            method: "POST",
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify(body),
        })
            .then(res => res.json())
            .then(res => {
                console.log("NEW KEY IS", res.sessionKey);
                Cookies.set("sessionKey", res.sessionKey);
                this.setState({
                    sessionKey: res.sessionKey,
                    isFetching: false,
                });
            })
            .catch(err => {
                this.setState({
                    isFetching: false,
                });
            });
    };

    onFailure = response => {
        console.log(response);
    };

    render() {
        if (this.state.isFetching) {
            return <CircularProgress color="secondary" />;
        }
        if (!this.state.sessionKey) {
            return (
                <LoginButton
                    clientId={googleClientId}
                    onSuccess={this.onSuccess}
                    onFailure={this.onFailure}
                />
            );
        } else {
            return <p>You are signed in</p>;
        }
    }
}

export default LoginButtonContainer;
