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

        {/* Mexico */}
        <Marker
          position={{
            lat: 23.634501,
            lng: -102.552784
          }}
        />

        {/* Peru */}
        <Marker
          position={{
            lat: -9.189966999999999,
            lng: -75.015152
          }}
        />

        {/* Morocco */}
        <Marker
          position={{
            lat: 31.791702,
            lng: -7.092619999999999
          }}
        />

        {/* South Korea */}
        <Marker
          position={{
            lat: 35.907757,
            lng: 127.766922
          }}
        />

        {/* North Korea */}
        <Marker
          position={{
            lat: 40.339852,
            lng: 127.510093
          }}
        />

        {/* Ireland */}
        <Marker
          position={{
            lat: 53.1423672,
            lng: -7.692053599999999
          }}
        />

        {/* United Kingdom */}
        <Marker
          position={{
            lat: 55.378051,
            lng: -3.435973
          }}
        />

        {/* Portugal */}
        <Marker
          position={{
            lat: 39.39987199999999,
            lng: -8.224454
          }}
        />

        {/* Spain */}
        <Marker
          position={{
            lat: 40.46366700000001,
            lng: -3.74922
          }}
        />

        {/* The Netherlands */}
        <Marker
          position={{
            lat: 52.132633,
            lng: 5.291265999999999
          }}
        />

        {/* Germany */}
        <Marker
          position={{
            lat: 51.165691,
            lng: 10.451526
          }}
        />

        {/* Denmark */}
        <Marker
          position={{
            lat: 56.26392,
            lng: 9.501785
          }}
        />

        {/* Austria */}
        <Marker
          position={{
            lat: 47.516231,
            lng: 14.550072
          }}
        />

        {/* Czech Republic */}
        <Marker
          position={{
            lat: 49.81749199999999,
            lng: 15.472962
          }}
        />

        {/* Slovakia */}
        <Marker
          position={{
            lat: 48.669026,
            lng: 19.699024
          }}
        />

        {/* Hungary */}
        <Marker
          position={{
            lat: 47.162494,
            lng: 19.5033041
          }}
        />

        {/* Italy */}
        <Marker
          position={{
            lat: 41.87194,
            lng: 12.56738
          }}
        />

        {/* Greece */}
        <Marker
          position={{
            lat: 39.074208,
            lng: 21.824312
          }}
        />

        {/* Vatican City */}
        <Marker
          position={{
            lat: 41.902916,
            lng: 12.453389
          }}
        />
        {/* San Marino */}
        <Marker
          position={{
            lat: 43.94236,
            lng: 12.457777
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
