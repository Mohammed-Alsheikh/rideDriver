import React, {useState, useEffect, useRef} from 'react';
import Geolocation from 'react-native-geolocation-service';
import _ from 'lodash';
import MapView from 'react-native-maps';
import {ActivityIndecator as Activity} from '../lib';
import CheckpointMarker from './checkpoint-marker';
import Directions from './Components/Directions';

import permission from './permissions';

import {GEOLOCATION_OPTIONS, LATITUDE, LONGITUDE} from './constants';
import styles from './styles';
import reactotron from 'reactotron-react-native';

export default ({navigation, checkpoints, onPickLocation}) => {
  const mapView = useRef(null);
  const [coordinate, setCoordinate] = useState(null);

  useEffect(() => {
    (async () => {
      if (await permission()) {
        Geolocation.getCurrentPosition(
          position => {
            setCoordinate({
              latitude: parseFloat(position.coords.latitude),
              longitude: parseFloat(position.coords.longitude),
              latitudeDelta: 5,
              longitudeDelta: 5,
            });
          },
          error => reactotron.log(error),
          GEOLOCATION_OPTIONS,
        );
      }
    })();
  }, []);

  const goToInitialLocation = () => {
    const initialRegion = Object.assign({}, coordinate);

    initialRegion.latitudeDelta = 0.01;
    initialRegion.longitudeDelta = 0.01;
    mapView.current.animateToRegion(initialRegion, 2300);
  };

  return coordinate ? (
    <MapView
      onPress={onPickLocation}
      style={styles.map}
      ref={mapView}
      zoomEnabled={true}
      onMapReady={goToInitialLocation}
      initialRegion={{
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: 10,
        longitudeDelta: 10,
      }}>
      {checkpoints.map(position => (
        <CheckpointMarker {...position} />
      ))}
      <Directions {...{checkpoints}} />
    </MapView>
  ) : (
    <Activity />
  );
};
