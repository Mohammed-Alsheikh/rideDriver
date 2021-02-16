import React, {useState, useEffect} from 'react';
import {Content} from 'native-base';
import {View, Image, TouchableOpacity, Text, Keyboard} from 'react-native';
import {ROUTES} from '../../../constants';
import {Input} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {SwitchActions} from 'react-navigation';
import {Button, Portal, Modal, Title, Snackbar} from 'react-native-paper';
import {colorsArray, ColorBox} from './widgets';
import {Logo} from '../../../constants';
import styles from './styles';
import Fonts from '../../../styles/fonts';
import Strings from '../../../../localization';
import {ActivityIndecator} from '../../../lib';

export default ({navigation, registerUser, user, errorMessage}) => {
  const [UserName, setUserName] = useState('');
  const [VerifyPass, setVerifyPass] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [busColor, setBusColor] = useState('black');
  const [busNumber, setBusNumber] = useState('');
  const [busType, setBusType] = useState('');
  const [passengersCount, setPassengersCount] = useState('');
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState('');
  const [state, setState] = useState(false);
  const {visible} = state;
  const _hideModal = () => setState({visible: false});

  useEffect(() => {
    if (errorMessage !== null) {
      setLoading(false);
      setSnack({visible: true, msg: errorMessage});
    }
  }, [errorMessage]);

  const navigateToLicence = () => navigation.push(ROUTES.Licence);

  const onSubmit = () => {
    if (VerifyPass !== password) {
      Keyboard.dismiss();
      setLoading(false);
      setSnack({visible: true, msg: 'كلمة المرور غير متطابقة'});
    } else {
      setLoading(true);
      registerUser(
        UserName,
        email,
        phone,
        password,
        busColor,
        busNumber,
        busType,
        passengersCount,
        navigateToLicence,
      );
    }
  };

  const _LoginHandler = () => {
    navigation.dispatch(
      SwitchActions.jumpTo({routeName: ROUTES.RegisterNavigator}),
    );
  };

  return (
    <Content>
      <View style={styles.container}>
        <Image
          source={Logo}
          resizeMode="contain"
          resizeMethod="resize"
          style={{width: 175, height: 175, alignSelf: 'center', marginTop: 5}}
        />
        <Text style={styles.Txt}>{Strings.CreateAccount}</Text>
        <Input
          placeholder={Strings.UserName}
          autoCapitalize="words"
          inputContainerStyle={styles.input}
          inputStyle={styles.inputtext}
          value={UserName}
          onChangeText={val => setUserName(val)}
        />
        <Input
          placeholder={Strings.PhoneNumber}
          keyboardType="number-pad"
          inputContainerStyle={styles.input}
          inputStyle={styles.inputtext}
          value={phone}
          onChangeText={val => setPhone(val)}
        />
        <Input
          placeholder={Strings.Email}
          keyboardType="email-address"
          inputContainerStyle={styles.input}
          inputStyle={styles.inputtext}
          value={email}
          onChangeText={val => setEmail(val)}
        />
        <Input
          placeholder={Strings.Password}
          keyboardType="visible-password"
          inputContainerStyle={styles.input}
          inputStyle={styles.inputtext}
          value={password}
          onChangeText={val => setPassword(val)}
        />
        <Input
          placeholder={Strings.ConfirmPass}
          autoCapitalize="words"
          inputContainerStyle={styles.input}
          inputStyle={styles.inputtext}
          value={VerifyPass}
          onChangeText={val => setVerifyPass(val)}
        />

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Button
            mode="outlined"
            onPress={() => setState({visible: true})}
            value={busColor}
            onChangeText={val => setBusColor(val)}
            style={{
              width: 260,
              height: 50,
              fontFamily: 'Tajawal-Regular',
              fontSize: Fonts.Size,
              borderRadius: 50,
              margin: 22,
            }}>
            <Text
              style={{
                color: 'gray',
                fontSize: Fonts.Size,
                marginHorizontal: 22,
              }}>
              {Strings.SelectColor}
            </Text>
          </Button>
          <View
            style={{
              width: 36,
              height: 36,
              backgroundColor: busColor,
              borderWidth: 1,
              borderBackgroundColor: 'black',
            }}
          />
        </View>
        <Input
          placeholder={Strings.NumOfBus}
          keyboardType="number-pad"
          inputContainerStyle={styles.input}
          inputStyle={styles.inputtext}
          value={busNumber}
          onChangeText={val => setBusNumber(val)}
        />
        <Input
          placeholder={Strings.typeBus}
          autoCapitalize="words"
          inputContainerStyle={styles.input}
          inputStyle={styles.inputtext}
          value={busType}
          onChangeText={val => setBusType(val)}
        />
        <Input
          placeholder={Strings.NumOfRider}
          keyboardType="number-pad"
          inputContainerStyle={styles.input}
          inputStyle={styles.inputtext}
          value={passengersCount}
          onChangeText={val => setPassengersCount(val)}
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
              <ActivityIndecator size="small" />
            ) : (
              <Text
                style={{
                  fontSize: Fonts.Size,
                  color: '#fff',
                  fontFamily: 'Tajawal-Regular',
                }}>
                {Strings.Next}
              </Text>
            )}
          </LinearGradient>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{padding: 24, flexDirection: 'row'}}>
            <TouchableOpacity onPress={_LoginHandler}>
              <Text
                style={{
                  color: '#1A8AB4',
                  fontSize: Fonts.Size,
                  fontFamily: 'Tajawal-Regular',
                  bottom: 5,
                }}>
                {Strings.LogIn}
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: Fonts.Size,
                fontFamily: 'Tajawal-Regular',
                color: 'gray',
                bottom: 6,
              }}>
              {Strings.HaveNotAcc}
            </Text>
          </View>
        </View>
        <Snackbar
          onDismiss={() => setSnack({visible: false, msg: ''})}
          duration={5000}
          style={{backgroundColor: '#0C4563', borderRadius: 60}}
          visible={snack.visible}>
          {snack.msg}
        </Snackbar>
      </View>
      <Portal>
        <Modal visible={visible} onDismiss={() => setState({visible: false})}>
          <View
            style={{
              width: 380,
              height: 160,
              backgroundColor: 'white',
              alignSelf: 'center',
            }}>
            <Title
              style={{
                alignSelf: 'center',
                marginVertical: 22,
                fontSize: Fonts.Size,
              }}>
              {Strings.SelectColor}
            </Title>
            <View
              style={{
                width: 380,
                height: 1,
                backgroundColor: 'black',
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 18,
                justifyContent: 'space-around',
              }}>
              {colorsArray.map((color, index) => (
                <ColorBox
                  color={color}
                  onPress={() => {
                    setBusColor(color);
                    _hideModal();
                  }}
                  key={index}
                />
              ))}
            </View>
          </View>
        </Modal>
      </Portal>
    </Content>
  );
};
