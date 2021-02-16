import React, {useCallback} from 'react';
import {Marker} from 'react-native-maps';
import {useDispatch} from 'react-redux';
import {fetchTrips} from '@actions/index';
import Types from '@types/index';

export default ({checkpointObj}) => {
  const dispatch = useDispatch();

  const onPressMarker = useCallback(() => {
    dispatch({
      type: Types.SET_SNACK_STATE,
      payload: {
        visible: true,
        type: 'confirmation',
        onConfirm: () => fetchTrips(checkpointObj)(dispatch),
        onCancel: () => dispatch({type: Types.CLEAR_SNACK}),
      },
    });
  }, [checkpointObj, dispatch]);

  return (
    <Marker
      pinColor={'purple'}
      coordinate={{
        longitude: Number(checkpointObj.get('coordinates').longitude),
        latitude: Number(checkpointObj.get('coordinates').latitude),
      }}
      onPress={() => {
        setTimeout(onPressMarker, 200);
      }}
      title={checkpointObj.get('name')}
    />
  );
};
