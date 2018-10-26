import React from "react";
import {
    withStyles,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    Button,
} from "@material-ui/core";

const styles = theme => ({
    card: {
        maxWidth: 600,
        marginLeft: "auto",
        marginRight: "auto",
    },
});

const GoalCard = ({ classes }) => (
    <Card className={classes.card}>
        <CardContent>
            <TextField
                id="current-field"
                variant="outlined"
                label="Current"
                className={classes.card}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">mi</InputAdornment>
                    ),
                }}
            />
            <TextField
                id="goal-field"
                variant="outlined"
                label="Goal"
                className={classes.card}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">mi</InputAdornment>
                    ),
                }}
            />
            <Button type="submit" color="primary" className={classes.card}>
                update
            </Button>
        </CardContent>
    </Card>
);

export default withStyles(styles)(GoalCard);
