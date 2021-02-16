import React, {useState} from 'react';
import {Content} from 'native-base';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StackActions} from 'react-navigation';
import {ROUTES} from '../../../constants';
import ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import Fonts from '../../../styles/fonts';
import Strings from '../../../../localization';
import {Id, Logo} from '../../../constants';

export default ({navigation, uploadImage}) => {
  const [image, setImage] = useState(null);
  const [snack, setSnack] = useState({visible: false, msg: ''});
  const [loading, setLoading] = useState(false);

  const pick = () =>
    ImagePicker.showImagePicker(response => {
      if (response.didCancel) {
      } else if (response.error) {
      } else {
        // const source = {uri: response.uri};
        setImage(response);
      }
    });

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
      StackActions.pop({
        routeName: ROUTES.Licence,
        params: {},
      }),
    );
  };
  const _LoginHandler3 = () => {
    if (image === null) {
      return;
    }
    uploadImage(image, 'Identity');

    navigation.dispatch(
      StackActions.push({
        routeName: ROUTES.SelectPath,
        params: {},
      }),
    );
  };
  return (
    <Content>
      <Image
        source={Logo}
        resizeMode="contain"
        resizeMethod="resize"
        style={{width: 175, height: 175, alignSelf: 'center', marginTop: 5}}
      />
      <Text style={styles.text1}> {Strings.CreateAccount} </Text>
      <Text style={styles.text2}> {Strings.ImageOfIdentity}</Text>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={pick}
        style={{alignSelf: 'center'}}>
        {image ? (
          <Image source={{uri: image.uri}} style={{width: 220, height: 220}} />
        ) : (
          <Image source={Id} style={{width: 240, height: 160}} />
        )}
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <TouchableOpacity
          onPress={_LoginHandler3}
          style={{
            marginHorizontal: 96,
            marginVertical: 80,
            width: 134,
            height: 46,
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
                marginVertical: 8,
                color: '#fff',
                fontFamily: Fonts.Type,
              }}>
              {Strings.Next}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', alignSelf: 'center', bottom: 22}}>
        <TouchableOpacity style={{bottom: 28}} onPress={_LoginHandler}>
          <Text
            style={{
              color: '#1A8AB4',
              fontSize: Fonts.Size,
              fontFamily: Fonts.Type,
            }}>
            {Strings.LogIn}
          </Text>
        </TouchableOpacity>
        <Text style={{fontSize: Fonts.Size, bottom: 28, color: 'gray'}}>
          {Strings.HaveNotAcc}
        </Text>
      </View>
    </Content>
  );
};
const styles = StyleSheet.create({
  text1: {
    fontSize: Fonts.Size,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    color: '#212121',
    fontFamily: Fonts.Type,
  },
  text2: {
    fontSize: Fonts.Size,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    color: '#757575',
    fontFamily: Fonts.Type,
  },
  button1: {
    borderRadius: 50,
  },
});
