import React from "react";
import { withStyles } from "@material-ui/core";

import { withStore } from "../utils/store";

const styles = theme => ({
    root: {},
});

const DashboardPage = ({ classes, store }) => {
    let user = store.get("user");

    if (!user) return <p>You aren't logged in :(</p>;

    return (
        <div>
            <p>
                This is {user.firstname}
                's dashboard!
            </p>
            <p>The dashboard goes here</p>
        </div>
    );
};

export default withStore(withStyles(styles)(DashboardPage));
