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
} from "@material-ui/core";
import NumberFormat from "react-number-format";

const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
    },
    margin: {
        margin: theme.spacing.unit,
    },
    textField: {
        flexBasis: 200,
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

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({ ...this.state });
    };

    makeField = (label, classes, units) => {
        let c = classes;
        let name = camelize(label);
        let adornment = !units ? null : (
            <InputAdornment position="end">in</InputAdornment>
        );

        return (
            <TextField
                name={name}
                className={classNames(c.margin, c.textField)}
                variant="outlined"
                label={label}
                value={this.state[name]}
                onChange={this.handleChange(name)}
                InputProps={{ endAdornment: adornment }}
            />
        );
    };

    render() {
        const { classes } = this.props;

        return (
            <Card>
                <form className={classes.root} onSubmit={this.handleSubmit}>
                    <CardContent>
                        {this.makeField("Age", classes)}
                        {this.makeField("Height", classes, "in")}
                        {this.makeField("Weight", classes, "lbs")}
                        {this.makeField("Longest Distance", classes, "mi")}
                        <TextField
                            id="bestMileTime-field"
                            className={classNames(
                                classes.margin,
                                classes.textField
                            )}
                            variant="outlined"
                            label="Best Mile Time"
                            value={this.state.bestMileTime.minutes}
                            onChange={this.handleChange("bestMileTime")}
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                            }}
                            InputLabelProps={{ shrink: true }}
                        />
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
                </form>
            </Card>
        );
    }
}

CalibrationCard.propTypes = {
    classes: PropTypes.object.isRequired,
    onSubmit: PropTypes.func,
};

export default withStyles(styles)(CalibrationCard);
