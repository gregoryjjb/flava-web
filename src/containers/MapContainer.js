import React from "react";
import { withStore } from "../utils/store";
import MapCard from "../components/MapCard";

class MapContainer extends React.Component {
    render() {
        const { store } = this.props;
        const user = store.get("user");

        if (!user) return null;

        const trails = user.trails || [];

        return <MapCard paths={trails} />;
    }
}

export default withStore(MapContainer);
