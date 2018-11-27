import React from "react";
import { withStyles } from "@material-ui/core";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

const apiKey = process.env.REACT_APP_MAPS_API_KEY;

const styles = theme => ({
    root: {},
});

const MyMapComponent = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
            {props.isMarkerShown && (
                <Marker position={{ lat: -34.397, lng: 150.644 }} />
            )}
        </GoogleMap>
    ))
);

class Maps extends React.Component {
    constructor(props) {
        super(props);

        this.ref = null;
    }

    componentDidMount() {}

    render() {
        return (
            <MyMapComponent
                isMarkerShown
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }
}

export default withStyles(styles)(Maps);
