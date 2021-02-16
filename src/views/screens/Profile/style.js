import {StyleSheet} from 'react-native';
import {height, width} from '../../styles';
import Fonts from '../../styles/fonts';

const style = StyleSheet.create({
  header: {
    height: height / 4,
    width: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '35%',
    height: 50,
  },
  text: {
    textAlign: Fonts.AlignText,
    paddingRight: 10,
    fontSize: Fonts.Size,
    color: Fonts.color,
    marginVertical: 15,
    fontFamily: Fonts.Type,
  },
  gradent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonV: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ComponentDiv: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  textuser: {
    paddingLeft: 20,
    top: 17,
    fontSize: Fonts.Size,
    fontFamily: Fonts.Type,
    color: 'black',
  },
  img: {
    height: height,
    width: width,
  },
});

export default style;
