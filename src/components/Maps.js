import React from "react";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
    root: {},
});

class Maps extends React.Component {
    constructor(props) {
        super(props);

        this.ref = null;
    }

    componentDidMount() {}

    render() {
        return <p ref={r => (this.ref = r)} />;
    }
}

export default withStyles(styles)(Maps);
