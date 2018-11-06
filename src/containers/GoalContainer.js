import React from "react";
import GoalCard from "../components/GoalCard";
import { withStore } from "../utils/store";
import api from "../utils/api";

class GoalContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            goal: null,
        };
    }

    handleSubmit = values => {
        api.getPlan(values.goal).then(res => {
            let { weeklyMiles } = res.data;
            if (!weeklyMiles) console.log("A boo-boo happened");
            this.setState({
                goal: weeklyMiles,
            });
        });
    };

    render() {
        return <GoalCard goal={this.state.goal} onSubmit={this.handleSubmit} />;
    }
}

export default withStore(GoalContainer);
