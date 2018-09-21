import { createMuiTheme } from "@material-ui/core/styles";

const defaultHeader = {
    fontFamily: '"Poor Story", cursive',
};

export default createMuiTheme({
    palette: {
        type: "light",
    },
    typography: {
        display4: {
            ...defaultHeader,
        },
        display3: {
            ...defaultHeader,
        },
        display2: {
            ...defaultHeader,
        },
    },
});
