import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import registerServiceWorker from "./registerServiceWorker";

import AppContainer from "./containers/AppContainer";
import theme from "./theme";

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer />
    </MuiThemeProvider>,
    document.getElementById("root")
);
registerServiceWorker();
