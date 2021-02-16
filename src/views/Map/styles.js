import {StyleSheet} from 'react-native';
import Fonts from '../styles/fonts';
import {height, width} from '../styles';
export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  detailText: {
    fontFamily: Fonts.Type,
    fontSize: Fonts.Size,
    textAlign: 'center',
    paddingTop: 10,
    color: '#FFFF',
  },
  modaltrip: {
    height: height / 3,
    width: null,
    alignItems: 'center',
  },
  textmap: {
    textAlign: 'center',
    color: '#fff',
    fontSize: Fonts.Size,
    fontFamily: Fonts.Type,
  },
  img: {
    height: height,
    width: width - 50,
  },
  button: {
    width: '20%',
    height: 30,
    position: 'absolute',
    left: 110,
  },
  Gradent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  Textbutton: {
    fontSize: Fonts.Size,
    color: '#fff',
    fontFamily: Fonts.Type,
  },
  button2: {
    width: '20%',
    height: 30,
    position: 'absolute',
    right: 110,
  },
});
