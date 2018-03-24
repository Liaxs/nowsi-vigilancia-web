import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { getCoords, Users } from './../handleFirebase'
import store from './../store'

class Maps extends Component {
	constructor(props){
		super(props);
		Users();
		this.state = {
			usuarios: [],
			marked: []
		}
			Array.prototype.unique=function(a){
			  return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
			});
		store.subscribe(()=>{
			this.setState({
				usuarios: this.state.usuarios.concat(store.getState().userReducer.users).unique(),
				marked: store.getState().markedPlaceReducer ? this.state.marked.concat( store.getState().markedPlaceReducer.coords ) : []
			});
		});
	}
	handleChange(event){
		store.dispatch({
		        type: "MARKED_PLACE",
		        coords: {lng:null, lat: null}
		      });
		this.setState({marked: []});
		 this.forceUpdate();
		getCoords(event.target.value);
	}
  render() {
  	let row = [];
  	this.state.usuarios.forEach(u=>{
  		row.push(<option key={u}>{u}</option>);
  	});
  	let rowMarked = [];
  	this.state.marked.forEach(m=>{
  		rowMarked.push(<Marker key={m} position={m} />);
  	});
    return (

      <div>
      <GoogleMap
	    defaultZoom={16}
	    defaultCenter={{ lat: -32.8903, lng:-68.84159833333334 }}
	  >
		{rowMarked}
	  </GoogleMap>
	   <select  onChange={this.handleChange.bind(this)}>
	   <option value ="null">Seleccionar</option>
		  {row}
		</select> 
      </div>
    );
  }
}

export default withGoogleMap(Maps); 