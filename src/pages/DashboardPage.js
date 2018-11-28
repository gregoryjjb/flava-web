import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import Gutters from "../components/Gutters";
import { withStore } from "../utils/store";
import CalibrationContainer from "../containers/CalibrationContainer";
import GoalContainer from "../containers/GoalContainer";
import MapContainer from "../containers/MapContainer";

import ChartCard from "../components/ChartCard";
import CalendarCard from "../components/CalendarCard";
import MapCard from "../components/MapCard";

const styles = theme => ({
    root: {},
    footerText: {
        paddingTop: 32,
    },
});

const DashboardPage = ({ classes, store }) => {
    let user = store.get("user");

    if (!user)
        return (
            <Gutters top bottom>
                <Typography variant="h4">You aren't logged in</Typography>
            </Gutters>
        );

    let weeklyPlan = user.weeklyPlan;
    let labels = null;
    if (Array.isArray(weeklyPlan))
        labels = weeklyPlan.map((n, i) => "Week " + (i + 1));

    let dailyPlan = user.dailyPlan;

    return (
        <div>
            <Gutters top bottom>
                <Typography variant="h4" gutterBottom>
                    Welcome to your dashboard, {user.firstname}
                </Typography>
                <CalibrationContainer />
                <GoalContainer />
                {dailyPlan && <CalendarCard plan={dailyPlan} />}
                {user.trails && <MapContainer />}
                {weeklyPlan &&
                    labels && <ChartCard labels={labels} data={weeklyPlan} />}
                <Typography variant="body1" className={classes.footerText}>
                    Flava created by Greg Brisebois, Craig Huff, and Brandt
                    Willams
                </Typography>
            </Gutters>
        </div>
    );
};

export default withStore(withStyles(styles)(DashboardPage));
