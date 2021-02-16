import {StyleSheet} from 'react-native';
import Fonts from '../../../styles/fonts';
import {width, height} from '../../../styles';

const styles = StyleSheet.create({
  detailText: {
    fontFamily: Fonts.Type,
    fontSize: Fonts.Size,
    textAlign: 'left',
    color: '#FFFF',
    paddingTop: 8,
    lineHeight: 20,
  },
  Snack: {
    borderRadius: 20,
    padding: 12,
    marginHorizontal: 20,
    backgroundColor: '#0D4D6D',
    flexDirection: 'row-reverse',
  },
  modal: {
    position: 'absolute',
    bottom: height / 2,
    left: 32,
    right: 32,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#0D4D6D',
  },
  buttonsnack: {
    borderColor: '#fff',
    borderRadius: 90,
    borderWidth: 2,
    paddingHorizontal: 20,
  },
  buttonsnack1: {
    borderColor: '#fff',
    borderRadius: 90,
    borderWidth: 2,
    paddingHorizontal: 25,
  },
  Gradent: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginHorizontal: 18,
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  Textbutton: {
    fontSize: 14,
    color: '#fff',
    fontFamily: Fonts.Type,
  },
});

export default styles;

export const colorsArray = [
  '#0B4D6C',
  '#0B5679',
  '#0B5E80',
  '#0E6388',
  '#0D6B90',
  '#0E81AC',
  '#0E81AC',
];
