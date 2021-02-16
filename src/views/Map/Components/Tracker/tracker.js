import React, {useState, useEffect} from 'react';
import {Parse} from 'parse/react-native';
import {Marker} from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import MapTypes from '@types/map';
import Types from '@types/index';

import reactotron from 'reactotron-react-native';

export const _default = ({}) => {
  const {mode, driverObj, busLocation} = useSelector(_ => _.map);
  const dispatch = useDispatch();

  return mode !== MapTypes.DEFAULT && !!driverObj ? (
    <_Marker {...{driverObj, busLocation, dispatch}} />
  ) : null;
};

const _Marker = ({driverObj, dispatch, busLocation}) => {
  useEffect(() => {
    const Location = Parse.Object.extend('Location');
    const query = new Parse.Query(Location);

    query.equalTo('objectId', driverObj.location.id);

    query.first().then(_ => {
      dispatch({type: Types.SET_BUS_LOCATION, payload: _.get('coords')});
    });

    query
      .subscribe()
      .then(subscription => {
        subscription.on('update', _ => {
          dispatch({type: Types.SET_BUS_LOCATION, payload: _.get('coords')});
        });
      })
      .catch(ex => {
        reactotron.log({ex});
      });

    return () => {
      Parse.LiveQuery.close();
    };
  }, [dispatch, driverObj, driverObj.id]);

  return busLocation ? (
    <Marker
      pinColor={'green'}
      title="Bus Location"
      coordinate={{
        longitude: parseFloat(busLocation.longitude),
        latitude: parseFloat(busLocation.latitude),
      }}
      onPress={() => {}}
    />
  ) : null;
};

export {_default as Tracker};
export default _default;
