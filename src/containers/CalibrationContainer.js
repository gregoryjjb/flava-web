import React from "react";
import CalibrationCard from "../components/CalibrationCard";
import { withStore } from "../utils/store";
import api from "../utils/api";

class CalibrationContainer extends React.Component {
    onSubmit = values => {
        api.setUserInfo(values).then(res => {
            let newUser = res.data;
            if (!newUser) console.error("Something bad happened");
            this.props.store.set("user")(newUser);
        });
    };

    render() {
        const { store } = this.props;
        const user = store.get("user");

        console.log("THE AGE", user.age);

        if (user.age) return null;

        return <CalibrationCard onSubmit={this.onSubmit} />;
    }
}

export default withStore(CalibrationContainer);
