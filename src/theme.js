import { createMuiTheme } from "@material-ui/core/styles";

const palette = {
    primary: {
        main: "#f57c00",
        light: "#ffad42",
        dark: "#bb4d00",
        contrastText: "#000",
    },
    secondary: {
        main: "#ff80ab",
        light: "#ffb2dd",
        dark: "#c94f7c",
        contrastText: "#fff",
    },
};

export default createMuiTheme({ palette });
