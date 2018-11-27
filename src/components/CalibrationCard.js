import React from "react";
import PropTypes from "prop-types";
import { withStyles, Card, CardContent, Typography } from "@material-ui/core";
import NumberFormat from "react-number-format";

import Form from "./Form";

const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
    },
    card: {
        margin: "16px 0",
    },
});

const NumberFormatCustom = props => {
    const { inputRef, onChange, ...other } = props;
    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        value: values.formattedValue,
                        name: "bestMileTime",
                    },
                });
            }}
            format="0#:##"
        />
    );
};

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

class CalibrationCard extends React.Component {
    state = {
        age: "",
        height: "",
        weight: "",
        bestMileTime: "",
        longestDistance: "",
    };

    handleSubmit = results => {
        console.log(results);
        this.props.onSubmit({ ...results });
    };

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Looks like you haven't been here before!
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Please fill out your information.
                    </Typography>
                    <Form
                        onSubmit={this.handleSubmit}
                        fields={[
                            {
                                name: "age",
                                label: "Age",
                                type: "number",
                                units: "yrs",
                                required: true,
                            },
                            {
                                name: "gender",
                                label: "Gender",
                                type: "select",
                                options: { m: "Male", f: "Female" },
                                required: true,
                            },
                            {
                                name: "height",
                                label: "Height",
                                type: "number",
                                units: "in",
                                required: true,
                                validation: h =>
                                    h > 0 ? "" : "Invalid height",
                            },
                            {
                                name: "weight",
                                label: "Weight",
                                type: "number",
                                units: "lb",
                                required: true,
                                validation: w =>
                                    w > 0 ? "" : "Invalid weight",
                            },
                            {
                                name: "longestDistance",
                                label: "Longest Distance",
                                type: "number",
                                units: "mi",
                                required: true,
                                validation: d =>
                                    d > 0 ? "" : "Invalid distance",
                            },
                            {
                                name: "bestMileTime",
                                label: "Best Mile Time",
                                type: "text",
                                required: true,
                                validation: function(s) {
                                    return s.trim().split(":")[1].length === 2
                                        ? ""
                                        : "Invalid time";
                                },
                                component: NumberFormatCustom,
                            },
                        ]}
                    />
                </CardContent>
            </Card>
        );
    }
}

CalibrationCard.propTypes = {
    classes: PropTypes.object.isRequired,
    onSubmit: PropTypes.func,
};

export default withStyles(styles)(CalibrationCard);
