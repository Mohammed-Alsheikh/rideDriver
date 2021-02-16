import React, {useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {useSelector, useDispatch} from 'react-redux';
import Types from '@types/index';
import {Marker} from 'react-native-maps';
import {
  WATCH_GEOLOCATION_OPTIONS,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
} from './constants';

export default ({coordinate}) => {
  const dispatch = useDispatch();
  const {myLocation} = useSelector(_ => _.map);

  useEffect(() => {
    dispatch({
      type: Types.SET_MY_LOCATION,
      payload: {
        ...coordinate,
        latitudeDelta: LATITUDE_DELTA / 12,
        longitudeDelta: LONGITUDE_DELTA / 12,
      },
    });
    Geolocation.watchPosition(
      position => {
        dispatch({
          type: Types.SET_MY_LOCATION,
          payload: {
            ...position.coords,
            latitudeDelta: LATITUDE_DELTA / 12,
            longitudeDelta: LONGITUDE_DELTA / 12,
          },
        });
      },
      err => {
        console.log({err});
      },
      WATCH_GEOLOCATION_OPTIONS,
    );
  }, [coordinate, dispatch]);

  return myLocation ? (
    <Marker coordinate={myLocation} title="My Location" />
  ) : null;
};
