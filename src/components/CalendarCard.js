import React from "react";

import { withStyles, Card, CardContent, Typography } from "@material-ui/core";
import CalendarTable from "./CalendarTable";

const styles = theme => ({
    root: {
        marginTop: 16,
    },
    overflow: {
        overflowX: "auto",
    },
});

const CalendarCard = ({ classes, plan }) => (
    <Card className={classes.root}>
        <CardContent>
            <Typography variant="h6">Plan Calendar</Typography>
            <div className={classes.overflow}>
                <CalendarTable plan={plan} />
            </div>
        </CardContent>
    </Card>
);

export default withStyles(styles)(CalendarCard);
