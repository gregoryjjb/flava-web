import { createMuiTheme } from "@material-ui/core/styles";

const defaultHeader = {
    fontFamily: '"Times New Roman", serif',
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
    },
});
