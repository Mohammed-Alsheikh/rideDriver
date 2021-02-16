import React from 'react';
import {TouchableOpacity} from 'react-native';

export const ColorBox = ({color, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{width: 32, height: 32, backgroundColor: color}}
  />
);

export const colorsArray = [
  '#2c786c',
  '#50d890',
  'yellow',
  'brown',
  'blue',
  'gray',
  'red',
  'orange',
  'white',
  'black',
];
