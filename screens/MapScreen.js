import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';




class Map extends React.Component {
  render() {
    return (
      <MapView
      region={this.props.coordinate}
      showsUserLocation={true}
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 48.858255,
        longitude: 2.347138,
        latitudeDelta: 0.5,
        longitudeDelta: 0.10
      }}
      />
    );
  }
}



export default Map;
