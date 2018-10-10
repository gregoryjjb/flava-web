import { withLogger, createStore, connect } from "undux";

export const store = createStore({
    "session.key": "",
    "session.fetching": false,
    user: null,
});

export const withStore = connect(withLogger(store));
