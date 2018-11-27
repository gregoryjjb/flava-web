import React from "react";

import {
    withStyles,
    Table,
    TableBody,
    TableRow,
    TableCell,
    TableHead,
} from "@material-ui/core";

const styles = theme => ({
    root: {},
    bold: {
        fontWeight: 500,
    },
});

const CalendarTable = ({ classes, plan }) => (
    <Table>
        <TableHead>
            <TableRow>
                <TableCell />
                <TableCell numeric>Sunday</TableCell>
                <TableCell numeric>Monday</TableCell>
                <TableCell numeric>Tuesday</TableCell>
                <TableCell numeric>Wednesday</TableCell>
                <TableCell numeric>Thursday</TableCell>
                <TableCell numeric>Friday</TableCell>
                <TableCell numeric>Saturday</TableCell>
                <TableCell numeric>Total</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {plan.map((week, i) => (
                <TableRow>
                    <TableCell
                        component="th"
                        scope="row"
                        className={classes.bold}
                    >
                        Week {i}
                    </TableCell>
                    {week.map(day => (
                        <TableCell numeric>{day || "none"}</TableCell>
                    ))}
                    <TableCell numeric className={classes.bold}>
                        {week.reduce((acc, n) => acc + n)}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);

export default withStyles(styles)(CalendarTable);
