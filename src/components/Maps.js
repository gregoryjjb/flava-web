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

const pathCoordinates = [
    { lng: -121.88116, lat: 37.33515 },
    { lng: -121.88075, lat: 37.33463 },
    { lng: -121.88065, lat: 37.33443 },
    { lng: -121.88057, lat: 37.3344 },
    { lng: -121.88021, lat: 37.33391 },
    { lng: -121.88017, lat: 37.33386 },
    { lng: -121.87989, lat: 37.33348 },
    { lng: -121.87962, lat: 37.3331 },
    { lng: -121.87957, lat: 37.33304 },
    { lng: -121.87933, lat: 37.33271 },
    { lng: -121.87905, lat: 37.33232 },
    { lng: -121.87854, lat: 37.33166 },
    { lng: -121.8785, lat: 37.3316 },
    { lng: -121.87742, lat: 37.33016 },
    { lng: -121.87738, lat: 37.3301 },
    { lng: -121.87717, lat: 37.32981 },
    { lng: -121.87632, lat: 37.32868 },
    { lng: -121.87628, lat: 37.32862 },
    { lng: -121.87605, lat: 37.32833 },
    { lng: -121.87599, lat: 37.32826 },
    { lng: -121.87592, lat: 37.32816 },
    { lng: -121.87591, lat: 37.32815 },
    { lng: -121.8758, lat: 37.32799 },
    { lng: -121.8757, lat: 37.32787 },
    { lng: -121.87563, lat: 37.32777 },
    { lng: -121.87553, lat: 37.32763 },
    { lng: -121.87544, lat: 37.32751 },
    { lng: -121.87517, lat: 37.32714 },
    { lng: -121.87512, lat: 37.32708 },
    { lng: -121.87489, lat: 37.32675 },
    { lng: -121.8741, lat: 37.32569 },
    { lng: -121.87405, lat: 37.32563 },
    { lng: -121.87352, lat: 37.32492 },
    { lng: -121.87339, lat: 37.32473 },
    { lng: -121.87326, lat: 37.32456 },
];

const MyMapComponent = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: 37.335265, lng: -121.882844 }}
        >
            {props.isMarkerShown && (
                <Marker position={{ lat: 37.335265, lng: -121.882844 }} />
            )}
            <Polyline
                path={pathCoordinates}
                options={{
                    strokeColor: "#673ab7",
                    strokeOpacity: 1,
                    strokeWeight: 4,
                    icons: [
                        {
                            icon: "hello",
                            offset: "0",
                            repeat: "10px",
                        },
                    ],
                }}
            />
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
