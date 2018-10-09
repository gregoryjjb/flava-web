import React from "react";

import { withStyles } from "@material-ui/core";

const Gutters = ({ top, bottom, children }) => (
    <div
        style={{
            maxWidth: 1200,
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: top ? 24 : 0,
            paddingBottom: bottom ? 24 : 0,
            paddingLeft: 16,
            paddingRight: 16,
        }}
    >
        {children}
    </div>
);

export default Gutters;
