import React from "react";
import { withStyles, TextField, InputAdornment } from "@material-ui/core";
import OutlinedSelect from "./Select";

const styles = theme => ({
    root: {
        width: "100%",
    },
});

const Input = ({ classes, field, value, valid, onChange, onBlur }) => {
    let input;

    let endAdornment = !field.units ? null : (
        <InputAdornment position="end">{field.units}</InputAdornment>
    );

    if (field.type === "select") {
        input = (
            <OutlinedSelect
                className={classes.root}
                name={field.name}
                label={field.label}
                options={field.options}
                value={value}
                valid={valid}
                onChange={onChange}
                onBlur={onBlur}
            />
        );
    } else {
        input = (
            <TextField
                className={classes.root}
                label={field.label}
                error={valid !== ""}
                helperText={valid}
                name={field.name}
                type={field.type}
                variant="outlined"
                value={value}
                onChange={e => {
                    console.log(e);
                    onChange(e);
                }}
                onBlur={onBlur}
                InputProps={{
                    endAdornment,
                    inputComponent: field.component,
                }}
            />
        );
    }

    return input;
};

export default withStyles(styles)(Input);
