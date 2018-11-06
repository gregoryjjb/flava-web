import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import Gutters from "../components/Gutters";
import { withStore } from "../utils/store";
import { Line } from "react-chartjs-2";
import CalibrationContainer from "../containers/CalibrationContainer";
import GoalContainer from "../containers/GoalContainer";

const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
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
            data: [65, 59, 80, 81, 56, 55, 40],
        },
    ],
};

const styles = theme => ({
    root: {},
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
            <Gutters top>
                <Typography variant="h4" gutterBottom>
                    Welcome to your dashboard, {user.firstname}
                </Typography>
                <CalibrationContainer />
                <GoalContainer />
                <Line data={data} />
                <p>Weight: {store.get("weight")}</p>
            </Gutters>
        </div>
    );
};

export default withStore(withStyles(styles)(DashboardPage));
