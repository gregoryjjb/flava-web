import React from "react";
import { withStyles, Card, CardContent, Typography } from "@material-ui/core";
import Form from "./Form";

const styles = theme => ({
    card: {
        maxWidth: 600,
        marginLeft: "auto",
        marginRight: "auto",
    },
    goal: {
        marginTop: 16,
    },
});

class GoalCard extends React.Component {
    handleSubmit = results => {
        console.log(results);
    };

    render() {
        const { classes, onSubmit } = this.props;
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        What's your next goal?
                    </Typography>
                    <Form
                        xs={12}
                        sm={6}
                        md={6}
                        lg={6}
                        onSubmit={onSubmit || undefined}
                        disabled={this.props.disabled}
                        fields={[
                            {
                                name: "currentWeekly",
                                label: "Current Weekly",
                                type: "number",
                                units: "mi",
                                required: true,
                                validation: mi =>
                                    mi >= 0 ? "" : "Must be >= 0",
                            },
                            {
                                name: "goalDistance",
                                label: "Distance Goal",
                                type: "number",
                                units: "mi",
                                required: true,
                                validation: mi =>
                                    mi < 0
                                        ? "Enter a positive number"
                                        : mi > 30
                                            ? "Must be less than 30"
                                            : "",
                            },
                            {
                                name: "weeks",
                                label: "Weeks",
                                type: "number",
                                units: "weeks",
                                required: true,
                                validation: w =>
                                    w >= 2 ? "" : "Must be at least 2 weeks",
                            },
                        ]}
                    />
                    {this.props.disabled && (
                        <Typography variant="body2">
                            Calculating your personalized plan...
                        </Typography>
                    )}
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(GoalCard);
