import React from "react";
import { withStyles, Card, CardContent, Typography } from "@material-ui/core";
import Form from "./Form";

const styles = theme => ({
    card: {
        maxWidth: 600,
        marginLeft: "auto",
        marginRight: "auto",
    },
});

class GoalCard extends React.Component {
    handleSubmit = results => {
        console.log(results);
    };

    render() {
        const { classes } = this.props;
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
                        onSubmit={this.handleSubmit}
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
                        ]}
                    />
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(GoalCard);
