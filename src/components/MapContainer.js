import React from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

var geocode = function(country) {
  //API call to geocode url
  var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
      var anHttpRequest = new XMLHttpRequest();
      anHttpRequest.onreadystatechange = function() {
        if (anHttpRequest.readyState === 4 && anHttpRequest.status === 200)
          aCallback(anHttpRequest.responseText);
      };

      anHttpRequest.open("GET", aUrl, true);
      anHttpRequest.send(null);
    };
  };
  var client = new HttpClient();
  client.get(
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
      country +
      "&key=" +
      process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    function(response) {
      let result = {
        lat: JSON.parse(response).results[0].geometry.location.lat,
        lng: JSON.parse(response).results[0].geometry.location.lng
      };
      return result;
    }
  );
};

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={1} defaultCenter={{ lat: 30, lng: 0 }}>
      {props.isMarkerShown && <Marker position={props.markerPosition} />}
      <div>
        <Marker position={{ lat: 0, lng: 0 }} />
      </div>
    </GoogleMap>
  ))
);

export default class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        <Map
          googleMapURL={
            "https://maps.googleapis.com/maps/api/js?key=" +
            process.env.REACT_APP_GOOGLE_MAPS_API_KEY +
            "=3.exp&libraries=geometry,drawing,places"
          }
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `55vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          placeMarker={this.placeMarker}
        />
      </div>
    );
  }
}
