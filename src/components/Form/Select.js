import React from "react";
import ReactDOM from "react-dom";
import {
    FormControl,
    InputLabel,
    Select,
    OutlinedInput,
    MenuItem,
    FormHelperText,
} from "@material-ui/core";

class OutlinedSelect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            labelWidth: 0,
        };
    }

    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    }

    render() {
        const {
            className,
            name,
            label,
            options,
            value,
            valid,
            onChange,
            onBlur,
        } = this.props;

        return (
            <FormControl variant="outlined" className={className}>
                <InputLabel
                    htmlFor={name + "-id"}
                    ref={ref => {
                        this.InputLabelRef = ref;
                    }}
                >
                    {label}
                </InputLabel>
                <Select
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={valid !== ""}
                    input={
                        <OutlinedInput
                            name={name}
                            id={name + "-id"}
                            labelWidth={this.state.labelWidth}
                        />
                    }
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {Object.keys(options).map(key => (
                        <MenuItem value={key} key={key}>
                            {options[key]}
                        </MenuItem>
                    ))}
                </Select>
                {valid !== "" && (
                    <FormHelperText style={{ color: "#f44336" }}>
                        {valid}
                    </FormHelperText>
                )}
            </FormControl>
        );
    }
}

export default OutlinedSelect;
