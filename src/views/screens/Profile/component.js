import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {Switch, Divider} from 'react-native-paper';
import {Container} from 'native-base';
import Fonts from '../../styles/fonts';
import {gradientColors} from '../../styles';
import LinearGradient from 'react-native-linear-gradient';
import DisplayModal from '../../lib/Modal';
import r from 'reactotron-react-native';
import {HEADER, IMAGE} from '../../constants';
import styles from './style';

export default ({navigation, user, resetPassword}) => {
  const [isToggled, setToggled] = useState(false);
  const [display, setdisplay] = useState(false);
  const ModalTrigger = () => {
    setdisplay(true);
  };

  return (
    <Container>
      <ImageBackground
        source={IMAGE}
        resizeMode="cover"
        resizeMethod="resize"
        style={styles.img}>
        <ImageBackground
          source={HEADER}
          resizeMode="cover"
          resizeMethod="resize"
          style={styles.header}
        />
        <View style={{marginVertical: 20, flex: 1}}>
          <View style={styles.ComponentDiv}>
            <Text style={styles.text}> اسم المستخدم :</Text>
            <Text style={styles.textuser}>{user?.username}</Text>
          </View>
          <Divider style={{backgroundColor: '#757575'}} />
          <View style={styles.ComponentDiv}>
            <Text style={styles.text}> البريد الالكتروني :</Text>
            <Text style={styles.textuser}>{user?.email}</Text>
          </View>
          <Divider style={{backgroundColor: '#757575'}} />
          <View style={styles.ComponentDiv}>
            <Text style={styles.text}> رقم الجوال :</Text>
            <Text style={styles.textuser}>{user?.phone}</Text>
          </View>
          <Divider style={{backgroundColor: '#757575'}} />
          <View style={styles.ComponentDiv}>
            <Text style={styles.text}> حالة الحساب :</Text>
            <Switch
              style={{paddingLeft: 30}}
              value={user?.status}
              color="#57B1DD"
              onValueChange={() => {
                setToggled(!isToggled);
              }}
            />
          </View>
        </View>
        <View style={styles.buttonV}>
          <TouchableOpacity
            style={styles.button}
            onPress={ModalTrigger}
            activeOpacity={1}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={gradientColors}
              style={styles.gradent}>
              <Text
                style={{
                  fontSize: Fonts.Size,
                  color: '#fff',
                  fontFamily: Fonts.Type,
                }}>
                تغير كلمة المرور
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <DisplayModal
            display={display}
            dismiss={() => setdisplay(false)}
            reset={resetPassword}
          />
        </View>
      </ImageBackground>
    </Container>
  );
};
