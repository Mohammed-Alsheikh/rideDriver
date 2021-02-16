import React from 'react';

import {Marker} from 'react-native-maps';

export default ({coordinate, name}) => {
  return <Marker coordinate={coordinate} title={name} />;
};
