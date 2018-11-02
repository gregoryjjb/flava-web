import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import {
    withStyles,
    InputAdornment,
    TextField,
    Button,
    Card,
    CardContent,
    CardActions,
    Grid,
    Typography,
} from "@material-ui/core";
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
    margin: {
        margin: theme.spacing.unit,
    },
    textField: {
        flexBasis: 200,
        width: "100%",
    },
    grid: {
        marginTop: 16,
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
                        value: values.value,
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

function camelize(str) {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
            return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
        })
        .replace(/\s+/g, "");
}

class CalibrationCard extends React.Component {
    state = {
        age: "",
        height: "",
        weight: "",
        bestMileTime: "",
        longestDistance: "",
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleSubmit = results => {
        /*event.preventDefault();

        let age = Number(this.state.age);
        let height = Number(this.state.height);
        let weight = Number(this.state.weight);
        let longestDistance = Number(this.state.longestDistance);
        let bestMileTime = Number(this.state.bestMileTime);

        let errors = [];
        if (!age || age <= 0) errors.push("Age must be greater than 0");
        if (!height && height <= 0)
            errors.push("Height must be greater than zero");
        if (!weight && weight <= 0)
            errors.push("Weight must be greater than zero");
        if (!longestDistance && longestDistance <= 0)
            errors.push("Longest Distance must be greater than zero");
        if (!bestMileTime && bestMileTime <= 0)
            errors.push("Best Mile Time must be greater than zero");

        if (errors.length > 0) window.alert(errors.join("; "));*/

        console.log(results);

        //this.props.onSubmit({ ...this.state });
    };

    makeField = (label, classes, units) => {
        let c = classes;
        let name = camelize(label);
        let adornment = !units ? null : (
            <InputAdornment position="end">{units}</InputAdornment>
        );

        return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <TextField
                    name={name}
                    className={classNames(c.textField)}
                    variant="outlined"
                    label={label}
                    value={this.state[name]}
                    onChange={this.handleChange(name)}
                    InputProps={{ endAdornment: adornment }}
                />
            </Grid>
        );
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
                                require: true,
                                validation: w =>
                                    w > 0 ? "" : "Invalid weight",
                            },
                            {
                                name: "longestDistance",
                                label: "Longest Distance",
                                type: "number",
                                units: "mi",
                                require: true,
                                validation: d =>
                                    d > 0 ? "" : "Invalid distance",
                            },
                        ]}
                    />
                    {/*<Grid container spacing={16} className={classes.grid}>
                            {this.makeField("Age", classes)}
                            {this.makeField("Height", classes, "in")}
                            {this.makeField("Weight", classes, "lbs")}
                            {this.makeField("Longest Distance", classes, "mi")}
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                <TextField
                                    id="bestMileTime-field"
                                    className={classNames(classes.textField)}
                                    variant="outlined"
                                    label="Best Mile Time"
                                    value={this.state.bestMileTime.minutes}
                                    onChange={this.handleChange("bestMileTime")}
                                    InputProps={{
                                        inputComponent: NumberFormatCustom,
                                    }}
                                    InputLabelProps={{ shrink: true }}
                                />
                                </Grid>
                        </Grid>*/}
                </CardContent>
                <CardActions>
                    <Button
                        type="submit"
                        color="primary"
                        className={classes.button}
                    >
                        submit
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

CalibrationCard.propTypes = {
    classes: PropTypes.object.isRequired,
    onSubmit: PropTypes.func,
};

export default withStyles(styles)(CalibrationCard);
