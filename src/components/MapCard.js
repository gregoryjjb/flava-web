import React from "react";
import { withStyles, Card, CardContent } from "@material-ui/core";
import Maps from "./Maps";

const styles = theme => ({
    root: {
        marginTop: 16,
    },
});

const MapCard = ({ classes }) => (
    <Card className={classes.root}>
        <CardContent>
            <Maps />
        </CardContent>
    </Card>
);

export default withStyles(styles)(MapCard);
