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

        store.set("fetchingPlan")(true);

        api.getPlan(values)
            .then(res => {
                let { weeklyTarget, weeklyPlan, dailyPlan } = res.data;

                if (
                    !weeklyTarget ||
                    !Array.isArray(weeklyPlan) ||
                    !Array.isArray(dailyPlan)
                ) {
                    console.log("A boo-boo happened");
                    return;
                }

                store.set("user")(res.data);
            })
            .catch(e => console.log(e))
            .then(() => {
                store.set("fetchingPlan")(false);
            });
    };

    render() {
        const { store } = this.props;

        const user = store.get("user");

        if (!user) return null;
        if (!user.age) return null;

        return (
            <GoalCard
                disabled={store.get("fetchingPlan")}
                onSubmit={this.handleSubmit}
            />
        );
    }
}

export default withStore(GoalContainer);
