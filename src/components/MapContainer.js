import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
  display: 'block'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 40.740920,
            lng: -73.975532
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);