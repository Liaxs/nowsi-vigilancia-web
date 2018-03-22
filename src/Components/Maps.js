import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { getCoords } from './handleFirebase'
class Maps extends Component {
	constructor(props){
		super(props);
		getCoords();
	}

  render() {
    return (
      <div>
      <GoogleMap
	    defaultZoom={16}
	    defaultCenter={{ lat: -32.8903, lng:-68.84159833333334 }}
	  >
	  </GoogleMap>
      </div>
    );
  }
}

export default withGoogleMap(Maps); 