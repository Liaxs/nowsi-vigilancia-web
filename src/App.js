import React, { Component } from 'react';
import Maps from './Components/Maps';

class App extends Component {
  handleMapMounted(map) {
    this._map = map;
    console.log(map);
  }
  render() {
    return (
      <div>
      <Maps
            containerElement={<div style={{ "height": "100%"  }} />}
            mapElement={<div style={{ "height": "500px" }} />} 
            onMapMounted={this.handleMapMounted.bind(this)}
            />
      </div>
    );
  }
}

export default App;
