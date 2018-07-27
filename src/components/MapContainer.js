import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

let APIKEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
let googleMapURL =
  "https://maps.googleapis.com/maps/api/js?key=" +
  APIKEY +
  "&v=3.exp&libraries=geometry,drawing,places";

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={1} defaultCenter={{ lat: 30, lng: 0 }}>
      <div>
        {/* TBD fix slow http api request and fix hardcoded country lat-longs, got values from https://developers.google.com/maps/documentation/geocoding/intro */}
        <Marker position={props.France} />
        {/* USA */}
        <Marker
          position={{
            lat: 37.09024,
            lng: -95.712891
          }}
        />

        {/* Canada */}
        <Marker
          position={{
            lat: 56.130366,
            lng: -106.346771
          }}
        />
      </div>
    </GoogleMap>
  ))
);

export default class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  HttpClient = function() {
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

  geocode = countryArray => {
    var that = this;
    var client = new this.HttpClient();
    countryArray.forEach(element => {
      client.get(
        "https://maps.googleapis.com/maps/api/geocode/json?address=" +
          element +
          "&key=" +
          APIKEY,
        function(response) {
          let result = {
            lat: JSON.parse(response).results[0].geometry.location.lat,
            lng: JSON.parse(response).results[0].geometry.location.lng
          };
          var key = element;
          var obj = {};
          obj[key] = result;
          that.setState(obj);
        }
      );
    });
  };

  render() {
    //TBD fix slow-loading issue with adding more array elements, Map props, and Marker props
    this.geocode(["France"]);

    return (
      <div style={{ height: "100%" }}>
        <Map
          googleMapURL={googleMapURL}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `55vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          placeMarker={this.placeMarker}
          France={this.state.France}
        />
      </div>
    );
  }
}
