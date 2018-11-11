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
        const { store } = this.props;

        api.getPlan(values).then(res => {
            let { weeklyTarget, weeklyPlan, dailyPlan } = res.data;
            if (
                !weeklyTarget ||
                !Array.isArray(weeklyPlan) ||
                !Array.isArray(dailyPlan)
            ) {
                console.log("A boo-boo happened");
                return;
            }
            store.set("weeklyTarget")(weeklyTarget);
            store.set("weeklyPlan")(weeklyPlan);
            store.set("dailyPlan")(dailyPlan);
        });
    };

    render() {
        const { store } = this.props;

        const goal = store.get("weeklyTarget");
        const plan = store.get("weeklyPlan");

        return (
            <GoalCard goal={goal} plan={plan} onSubmit={this.handleSubmit} />
        );
    }
}

export default withStore(GoalContainer);
