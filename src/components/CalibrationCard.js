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
import { withStore } from "../utils/store";
import api from "../utils/api";

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
            format="0#:##"
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

    handleSubmit = event => {
        event.preventDefault();
        //Send to the server after validating data
        //alert("Weight: " + this.state.weight);
        //this.props.store.set("weight")(1234);

        api.setUserInfo({
            age: this.state.age,
            height: this.state.height,
            weight: this.state.weight,
            bestMileTime: this.state.bestMile,
            longestDistance: this.state.longestDistance,
        }).then(res => {
            let newUser = res.data;

            this.store.set("user")(newUser);
        });
    };

    render() {
        const { classes } = this.props;
        const store = this.props.store;

        return (
            <Card>
                <form className={classes.root} onSubmit={this.handleSubmit}>
                    <CardContent>
                        <TextField
                            id="age-field"
                            className={classNames(
                                classes.margin,
                                classes.textField
                            )}
                            variant="outlined"
                            label="Age"
                            value={this.state.age}
                            onChange={this.handleChange("age")}
                        />
                        <TextField
                            id="height-field"
                            className={classNames(
                                classes.margin,
                                classes.textField
                            )}
                            variant="outlined"
                            label="Height"
                            value={this.state.height}
                            onChange={this.handleChange("height")}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        in
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            id="weight-field"
                            className={classNames(
                                classes.margin,
                                classes.textField
                            )}
                            variant="outlined"
                            label="Weight"
                            value={this.state.weight}
                            onChange={this.handleChange("weight")}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        lbs
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            id="longestDistance-field"
                            className={classNames(
                                classes.margin,
                                classes.textField
                            )}
                            variant="outlined"
                            label="Longest Distance"
                            value={this.state.longestDistance}
                            onChange={this.handleChange("longestDistance")}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        mi
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            id="bestMile-field"
                            className={classNames(
                                classes.margin,
                                classes.textField
                            )}
                            variant="outlined"
                            label="Best Mile Time"
                            value={this.state.bestMile.minutes}
                            onChange={this.handleChange("bestMile")}
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

FeatureForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStore(withStyles(styles)(FeatureForm));
