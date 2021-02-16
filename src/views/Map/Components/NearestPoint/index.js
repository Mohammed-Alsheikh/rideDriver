import React, {useEffect} from 'react';
import {useSelector, useDispatch, batch} from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';
import {Marker} from 'react-native-maps';
import {GOOGLE_MAPS_API_KEY_OLD} from 'react-native-dotenv';
import Types from '@types/index';
import SnackTypes from '@types/snack';
import reactotron from 'reactotron-react-native';

const SPACE = 0.00013;

const _default = ({}) => {
  const dispatch = useDispatch();
  const {myLocation, nearestCheckpoint} = useSelector(_ => _.map);

  return nearestCheckpoint && myLocation ? (
    <React.Fragment>
      <Marker
        zIndex={1}
        coordinate={{
          latitude: nearestCheckpoint.location.lat + SPACE,
          longitude: nearestCheckpoint.location.lng - SPACE,
        }}
        title="Nearest Point"
        pinColor={'cyan'}
      />
      <MapViewDirections
        origin={myLocation}
        destination={{
          latitude: nearestCheckpoint.location.lat,
          longitude: nearestCheckpoint.location.lng,
        }}
        apikey={GOOGLE_MAPS_API_KEY_OLD}
        strokeWidth={3}
        strokeColor={'cyan'}
        onReady={({distance, duration}) => {
          dispatch(() => {
            batch(() => {
              dispatch({
                type: Types.SET_DURATION_DISTANCE,
                payload: {
                  distance: Math.round(distance),
                  duration: Math.round(duration),
                },
            });
              dispatch({
                type: Types.SET_SNACK_STATE,
                payload: {visible: true, type: SnackTypes.approvedTrip},
              });
            });
          });
        }}
      />
    </React.Fragment>
  ) : null;
};

export {_default as NearestPoint};
export default _default;
