import { withLogger, createStore, connect } from "undux";

export const store = createStore({
    "session.key": "",
    "session.fetching": false,
    user: null,
    weeklyTarget: null,
    weeklyPlan: null,
    dailyPlan: null,
});

export const withStore = connect(withLogger(store));
