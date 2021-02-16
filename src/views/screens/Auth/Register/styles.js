import {StyleSheet} from 'react-native';
import Fonts from '../../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderRadius: 80,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    marginHorizontal: 50,
    marginVertical: 12,
    paddingRight: 10,
  },
  inputtext: {
    paddingLeft: 18,
    color: '#00B5FF',
    textAlign: 'auto',
    fontFamily: Fonts.Type,
    fontSize: 19,
  },
  button: {
    width: '58%',
    height: 55,
    marginVertical: 20,
  },
  Gradent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  Txt: {
    fontSize: Fonts.Size,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    color: '#757575',
    fontFamily: Fonts.Type,
  },
});
