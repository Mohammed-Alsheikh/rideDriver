import {StyleSheet} from 'react-native';
import Colors, {height, width} from '../styles';
import Fonts from '../styles/fonts';
export const modalStyles = StyleSheet.create({
  input: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    marginHorizontal: 20,
    marginVertical: 3,
    paddingRight: 10,
  },
  inputtext: {
    paddingLeft: 18,
    color: Colors.primary,
    textAlign: Fonts.AlignText,
    fontFamily: Fonts.Type,
    fontSize: Fonts.Size,
  },
  gradent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 8,
  },
  button: {
    width: '90%',
    height: 55,
  },
  border: {
    borderWidth: 1,
    borderColor: '#757575',
    borderStyle: 'solid',
    width: width - 30,
    marginVertical: 5,
  },
  modalpassword: {
    backgroundColor: Colors.background,
    height: height / 2.2,
    width: width - 2 * 24,
    borderRadius: 20,
    alignItems: 'center',
    left: 24,
  },
  Textbutton: {
    fontSize: Fonts.Size,
    color: '#fff',
    fontFamily: Fonts.Type,
  },
  textmodal: {
    paddingTop: 22,
    fontSize: 20,
    fontFamily: Fonts.Type,
    color: Fonts.color,
  },
  textmap: {
    textAlign: 'center',
    color: '#fff',
    fontSize: Fonts.Size,
    fontFamily: Fonts.Type,
  },
  img: {
    flex: 1,
    width: null,
    height: null,
  },
});
