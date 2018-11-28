import React from "react";
import { withStyles, Card, CardContent } from "@material-ui/core";
import Maps from "./Maps";

const styles = theme => ({
    root: {
        marginTop: 16,
    },
    content: {
        padding: 0,
    },
});

const MapCard = ({ classes, paths }) => (
    <Card className={classes.root}>
        <Maps paths={paths} />
    </Card>
);

export default withStyles(styles)(MapCard);
