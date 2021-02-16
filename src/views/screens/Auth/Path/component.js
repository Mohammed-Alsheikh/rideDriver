import React, {useState} from 'react';
import {Container} from 'native-base';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Picker,
} from 'react-native';
import {StackActions} from 'react-navigation';
import {ROUTES} from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {Logo} from '../../../constants';
import {height, width} from '../../../styles';
import Fonts from '../../../styles/fonts';
import Strings from '../../../../localization';

export default ({navigation}) => {
  const [state, setState] = useState('');

  const _LoginHandler = () => {
    navigation.dispatch(
      StackActions.push({
        routeName: ROUTES.Login,
        params: {},
      }),
    );
  };
  const _LoginHandler2 = () => {
    navigation.dispatch(
      StackActions.push({
        routeName: ROUTES.CreatePath,
        params: {},
      }),
    );
  };
  return (
    <Container>
      <Image
        source={Logo}
        resizeMode="contain"
        resizeMethod="resize"
        style={{width: 175, height: 175, alignSelf: 'center', marginTop: 5}}
      />
      <Text style={styles.text1}> {Strings.CreateAccount} </Text>

      <Picker
        selectedValue={state.language}
        style={{height: 60, width: 152, left: 44}}
        onValueChange={(itemValue, itemIndex) =>
          setState({language: itemValue})
        }>
        <Picker.Item label="lwansoseh" color="#0D597B" value="lwansoseh" />
        <Picker.Item label="trya" color="#0D597B" value="trya" />
      </Picker>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          marginVertical: 40,
          width: 220,
          height: 56,
        }}
        activeOpacity={0.9}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[
            '#0C4563',
            '#0D4E6E',
            '#0D597B',
            '#0D668A',
            '#0D6E94',
            '#0E78A0',
            '#0E81AC',
          ]}
          style={styles.button1}>
          <Text
            style={{
              fontSize: Fonts.Size,
              alignSelf: 'center',
              marginVertical: 14,
              color: '#fff',
              fontFamily: Fonts.type,
            }}>
            {Strings.ConfirmPath}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: Fonts.Size,
          bottom: 28,
          color: 'gray',
          alignSelf: 'center',
          marginHorizontal: 20,
        }}>
        {'او'}
      </Text>

      <TouchableOpacity
        style={{bottom: 20, alignSelf: 'center'}}
        onPress={_LoginHandler2}>
        <Text
          style={{
            color: '#1A8AB4',
            fontSize: Fonts.Size,
            fontFamily: Fonts.type,
          }}>
          {Strings.CreateNewLine}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginVertical: 100,
        }}>
        <TouchableOpacity style={{bottom: 28}} onPress={_LoginHandler}>
          <Text
            style={{
              color: '#1A8AB4',
              fontSize: Fonts.Size,
              fontFamily: Fonts.type,
            }}>
            {Strings.LogIn}
          </Text>
        </TouchableOpacity>
        <Text style={{fontSize: Fonts.Size, bottom: 28, color: 'gray'}}>
          {Strings.HaveNotAcc}
        </Text>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  text1: {
    fontSize: Fonts.Size,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    color: '#212121',
    fontFamily: Fonts.type,
  },
  text2: {
    fontSize: Fonts.Size,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    color: '#757575',
    fontFamily: Fonts.type,
  },
  button1: {
    borderRadius: 50,
    height: 54,
  },
});
