import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import App from "./components/App";
import AppContainer from "./containers/AppContainer";
import registerServiceWorker from "./registerServiceWorker";
import theme from "./theme";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer />
    </MuiThemeProvider>,
    document.getElementById("root")
);
registerServiceWorker();
