import React, { Component } from "react";
import Cookies from "js-cookie";

import api from "../utils/api";

import { withStore } from "../utils/store";
import App from "../components/App";

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "",
        };
    }

    componentDidMount() {
        const key = Cookies.get("sessionKey");

        if (key) {
            const store = this.props.store;

            store.set("session.fetching")(true);

            api.resumeSession(key)
                .then(res => {
                    let { data } = res;
                    if (!data.user) {
                        console.log("Found key, but was invalid");
                        store.set("session.key")("");
                        store.set("user")(null);
                        Cookies.remove("sessionKey");
                    } else {
                        console.log("Resuming old session");
                        store.set("session.key")(key);
                        store.set("user")(data.user);
                    }
                })
                .catch(err => {})
                .then(() => {
                    store.set("session.fetching")(false);
                });
        }
    }

    render() {
        return <App message={this.state.message} />;
    }
}

export default withStore(AppContainer);
