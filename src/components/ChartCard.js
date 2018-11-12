import React from "react";
import { Line } from "react-chartjs-2";

import { withStyles, Card, CardContent, Typography } from "@material-ui/core";

const getChartData = (labels, data, theme) => ({
    labels: labels || [],
    datasets: [
        {
            label: "Miles",
            fill: false,
            lineTension: 0.1,
            backgroundColor: theme.palette.secondary.light,
            borderColor: theme.palette.secondary.main,
            borderCapStyle: "butt",
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: theme.palette.secondary.main,
            pointHoverBorderColor: theme.palette.primary.main,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: data || [],
        },
    ],
});

const styles = theme => ({
    root: {
        marginTop: 16,
    },
});

const ChartCard = ({ classes, theme, labels = [], data = [] }) => (
    <Card className={classes.root}>
        <CardContent>
            <Typography variant="h6" gutterBottom>
                Weekly Miles
            </Typography>
            <Line data={getChartData(labels, data, theme)} />
        </CardContent>
    </Card>
);

export default withStyles(styles, { withTheme: true })(ChartCard);
