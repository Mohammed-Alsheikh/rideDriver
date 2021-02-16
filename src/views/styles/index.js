import {Dimensions} from 'react-native';

const Colors = {
  background: '#F3F3F3',
  primary: '#00B5FF',
  secondary: '#0A475C',
  primaryText: '#00B5FF',
  peachGrey: '#E0E0E0',
};
const gradientColors = [
  '#0C4563',
  '#0D4E6E',
  '#0D597B',
  '#0D668A',
  '#0D6E94',
  '#0E78A0',
  '#0E81AC',
];
const {width, height} = Dimensions.get('window');

export {width, height, gradientColors};
export default Colors;
