import React from "react";
import { withStyles } from "@material-ui/core";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    Polyline,
} from "react-google-maps";

const apiKey = process.env.REACT_APP_MAPS_API_KEY;

const styles = theme => ({
    root: {},
});

const MyMapComponent = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lng: -121.88116, lat: 37.33515 }}
        >
            {props.isMarkerShown && (
                <Marker position={{ lat: 37.335265, lng: -121.882844 }} />
            )}
            {props.paths.map((p, k) => {
                console.log("Got a path of length", p.length);
                return (
                    <Polyline
                        path={p}
                        key={JSON.stringify(p)}
                        options={{
                            strokeColor: "#673ab7",
                            strokeOpacity: 1,
                            strokeWeight: 4,
                        }}
                    />
                );
            })}
        </GoogleMap>
    ))
);

const Maps = ({ classes, paths = [] }) => (
    <MyMapComponent
        paths={paths}
        isMarkerShown={false}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
    />
);

export default withStyles(styles)(Maps);
