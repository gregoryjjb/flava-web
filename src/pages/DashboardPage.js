import React from "react";
import { withStyles, Typography, Card, CardContent } from "@material-ui/core";
import Gutters from "../components/Gutters";
import { withStore } from "../utils/store";
import { Line } from "react-chartjs-2";
import CalibrationContainer from "../containers/CalibrationContainer";
import GoalContainer from "../containers/GoalContainer";

const data = {
    labels: [
        "Week 1",
        "Week 2",
        "Week 3",
        "Week 4",
        "Week 5",
        "Week 6",
        "Week 7",
    ],
    datasets: [
        {
            label: "Miles",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [10, 12, 13, 15, 16, 18, 19].sort(),
        },
    ],
};

const styles = theme => ({
    root: {},
    chart: {
        marginTop: 16,
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
    return (
        <div>
            <Gutters top bottom>
                <Typography variant="h4" gutterBottom>
                    Welcome to your dashboard, {user.firstname}
                </Typography>
                <CalibrationContainer />
                <GoalContainer />
                <Card className={classes.chart}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Your Weekly Running Plan
                        </Typography>
                        <Line data={data} />
                    </CardContent>
                </Card>
            </Gutters>
        </div>
    );
};

export default withStore(withStyles(styles)(DashboardPage));
