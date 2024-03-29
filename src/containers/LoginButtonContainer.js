import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Cookies from "js-cookie";

import { Button, CircularProgress } from "@material-ui/core";

import { withStore } from "../utils/store";
import api from "../utils/api";

import UnstyledLink from "../components/UnstyledLink";
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

    onSuccess = response => {
        const token = response.tokenId;
        const { store, history } = this.props;

        store.set("session.fetching")(true);

        api.login(token)
            .then(res => {
                let s = res.data.sessionKey;
                let u = res.data.user;
                console.log("Starting new session");
                Cookies.set("sessionKey", s, { expires: 365 });
                store.set("session.key")(s);
                store.set("user")(u);
            })
            .catch(err => console.error(err))
            .then(() => {
                store.set("session.fetching")(false);
                history.push("/dashboard");
            });
    };

    onFailure = response => {
        console.log(response);
    };

    onLogoutClick = () => {
        const { store, history } = this.props;

        store.set("session.fetching")(true);

        api.logout()
            .then(res => {
                console.log("Logged out");
                store.set("session.key")("");
                store.set("user")(null);
                Cookies.remove("sessionKey");
            })
            .catch(e => console.error(e))
            .then(() => {
                store.set("session.fetching")(false);
                history.push("/");
            });
    };

    render() {
        const store = this.props.store;

        if (store.get("session.fetching")) {
            return <CircularProgress color="secondary" />;
        }
        if (store.get("session.key") === "") {
            return (
                <LoginButton
                    clientId={googleClientId}
                    onSuccess={this.onSuccess}
                    onFailure={this.onFailure}
                />
            );
        } else {
            return (
                <div style={{ display: "inline-block" }}>
                    <UnstyledLink to="/dashboard">
                        <Button
                            variant="contained"
                            color="secondary"
                            style={{ marginRight: 16 }}
                        >
                            My Dashboard
                        </Button>
                    </UnstyledLink>
                    <Button variant="contained" onClick={this.onLogoutClick}>
                        Log out
                    </Button>
                </div>
            );
        }
    }
}

export default withStore(withRouter(LoginButtonContainer));
