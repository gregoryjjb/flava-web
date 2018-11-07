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
        const { classes, goal, onSubmit } = this.props;
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
                        fields={[
                            {
                                name: "current",
                                label: "Current",
                                type: "number",
                                units: "mi",
                                required: true,
                            },
                            {
                                name: "goal",
                                label: "Goal",
                                type: "number",
                                units: "mi",
                                required: true,
                            },
                            {
                                name: "weeks",
                                label: "Weeks",
                                type: "number",
                                units: "weeks",
                                required: true,
                                validation: w =>
                                    w >= 1 ? "" : "At least 1 week",
                            },
                        ]}
                    />
                    {goal && (
                        <div className={classes.goal}>
                            <Typography variant="subtitle1">
                                You need to be running {goal} miles a week.
                            </Typography>
                        </div>
                    )}
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(GoalCard);
