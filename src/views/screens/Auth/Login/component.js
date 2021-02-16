import React, {useState, useEffect} from 'react';
import {Snackbar} from 'react-native-paper';
import {Content, Container} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SwitchActions, StackActions} from 'react-navigation';
import {Image, View, TouchableOpacity, StyleSheet} from 'react-native';
import Text from '../../../lib/Text';
import Colors from '../../../styles';
import Fonts from '../../../styles/fonts';
import {ROUTES} from '../../../constants';
import {TextInput, useTextInput, ActivityIndecator} from '../../../lib';
import {Logo} from '../../../constants';
import Strings from '../../../../localization';

export default ({navigation, loginUser, user, errorMessage}) => {
  const username = useTextInput('');
  const password = useTextInput('');
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState({visible: false, msg: ''});

  useEffect(() => {
    if (user?.id) {
      navigation.dispatch(
        SwitchActions.jumpTo({routeName: ROUTES.DrawerNavigator}),
      );
    } else if (errorMessage !== '') {
      setLoading(false);
      setSnack({visible: true, msg: errorMessage});
    }
  }, [errorMessage, navigation, user]);

  const onSubmit = async () => {
    setLoading(true);
    loginUser(username.value, password.value);
  };

  const _RegisterHandler = () => {
    navigation.dispatch(
      SwitchActions.jumpTo({routeName: ROUTES.RegisterNavigator}),
    );
  };

  return (
    <Container>
      <Content>
        <View style={styles.container}>
          <Image
            source={Logo}
            resizeMode="contain"
            resizeMethod="resize"
            style={{
              width: 200,
              height: 200,
              alignSelf: 'center',
              marginTop: 20,
            }}
          />
          <Text style={styles.text}>{Strings.LogIn}</Text>
          <TextInput
            style={{fontSize: Fonts.Size}}
            placeholder={Strings.UserName}
            rightIcon={
              <Icon name="person" size={25} color={Colors.peachGrey} />
            }
            {...username}
          />
          <TextInput
            fontSize={{fontSize: Fonts.Size}}
            placeholder={Strings.Password}
            rightIcon={<Icon name="lock" size={25} color="#E0E0E0" />}
            {...password}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={onSubmit}
            disabled={loading}
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
              style={styles.Gradent}>
              {loading ? (
                <ActivityIndecator size={'small'} />
              ) : (
                <Text style={styles.TextButton}>{Strings.LogIn}</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={_RegisterHandler}>
              <Text
                style={{
                  color: '#1A8AB4',
                  fontSize: Fonts.Size,
                }}>
                {Strings.CreateAccount}
              </Text>
            </TouchableOpacity>
            <Text style={{fontSize: Fonts.size}}>{Strings.HaveNotAcc}</Text>
          </View>
        </View>
      </Content>
      <Snackbar
        onDismiss={() => setSnack({visible: false, msg: ''})}
        duration={5000}
        style={{backgroundColor: '#0C4563'}}
        visible={snack.visible}>
        {snack.msg}
      </Snackbar>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  input: {
    borderRadius: 80,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    marginHorizontal: 60,
    marginVertical: 15,
  },
  button: {
    width: '45%',
    height: 40,
    marginVertical: 20,
  },
  Gradent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  text: {
    fontSize: Fonts.Size,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 30,
    fontFamily: Fonts.Type,
    color: Fonts.color,
  },
  inputtext: {
    paddingLeft: 12,
    color: '#00B5FF',
    textAlign: Fonts.AlignText,
    fontFamily: Fonts.Type,
    fontSize: Fonts.Size,
  },
  TextButton: {
    fontSize: Fonts.Size,
    color: '#fff',
    fontFamily: Fonts.Type,
  },
  TextReg: {
    color: '#1A8AB4',
    fontSize: Fonts.Size,
    fontFamily: Fonts.Type,
    bottom: 2,
  },
});
