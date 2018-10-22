import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import NumberFormat from "react-number-format";
import Button from "@material-ui/core/Button";

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

function NumberFormatCustom(props) {
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
            format="#:##"
        />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

class FeatureForm extends React.Component {
    state = {
        age: "",
        height: "",
        weight: "",
        bestMile: "",
        longestDistance: "",
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleSubmit(event) {
        alert("A name was submitted: " + this.state.value);
        event.preventDefault();
    }

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.root} onSubmit={this.handleSubmit}>
                <TextField
                    id="age-field"
                    className={classNames(classes.margin, classes.textField)}
                    variant="outlined"
                    label="Age"
                    value={this.state.age}
                    onChange={this.handleChange("age")}
                />
                <TextField
                    id="height-field"
                    className={classNames(classes.margin, classes.textField)}
                    variant="outlined"
                    label="Height"
                    value={this.state.height}
                    onChange={this.handleChange("height")}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">in</InputAdornment>
                        ),
                    }}
                />
                <TextField
                    id="weight-field"
                    className={classNames(classes.margin, classes.textField)}
                    variant="outlined"
                    label="Weight"
                    value={this.state.weight}
                    onChange={this.handleChange("weight")}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">lbs</InputAdornment>
                        ),
                    }}
                />
                <TextField
                    id="longestDistance-field"
                    className={classNames(classes.margin, classes.textField)}
                    variant="outlined"
                    label="Longest Distance"
                    value={this.state.longestDistance}
                    onChange={this.handleChange("longestDistance")}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">mi</InputAdornment>
                        ),
                    }}
                />
                <TextField
                    id="bestMile-field"
                    className={classNames(classes.margin, classes.textField)}
                    variant="outlined"
                    label="Best Mile Time"
                    value={this.state.bestMile.minutes}
                    onChange={this.handleChange("bestMile")}
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                    InputLabelProps={{ shrink: true }}
                />
                <Button
                    type="submit"
                    color="primary"
                    className={classes.button}
                >
                    submit
                </Button>
            </form>
        );
    }
}

FeatureForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeatureForm);
