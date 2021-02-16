/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';
import {Appbar, Title, Switch} from 'react-native-paper';
import {Container} from 'native-base';
import {Snackbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {DrawerActions} from 'react-navigation-drawer';
import {height, width} from '../../styles';
import strings from '../../../localization';
import styles from './styles';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Map from './map';

export default ({navigation}) => {
  const [visible, setvisible] = useState(true);
  const [display, setdisplay] = useState(false);
  const [isToggled, setToggled] = useState(false);

  const _SearchTrigger = () => {
    setdisplay(true);
  };
  return (
    <Container>
      <View style={{flex: 1}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#0C4563', '#0C415F', '#0C4968', '#0D5C7F', '#0D6F95']}>
          <Appbar.Header style={{backgroundColor: 'transparent'}}>
            <Title
              style={{
                marginLeft: 60,
                color: '#fff',
                fontSize: 22,
                fontFamily: 'Tajawal-Regular',
                position: 'absolute',
              }}>
              {strings.Map}
            </Title>

            <Icon
              name="menu"
              size={28}
              color="#fff"
              style={{left: 10, position: 'absolute'}}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
            <Switch
              style={{marginLeft: 360, position: 'absolute'}}
              color="#57B1DD"
              value={isToggled}
              onValueChange={() => {
                setToggled(!isToggled);
              }}
            />
          </Appbar.Header>
        </LinearGradient>
      </View>
      <View style={{flex: 11}}>
        <Map />
      </View>

      <View>
        <LinearGradient
          colors={[
            '#0E82AC',
            '#0D6F95',
            '#0D5C7F',
            '#0C4968',
            '#0C415F',
            '#0C4563',
            '#0C415E',
          ]}>
          <Snackbar
            visible={visible}
            value={visible}
            onDismiss={() => {
              setvisible(!visible);
            }}
            style={{
              borderRadius: 20,
              backgroundColor: '#0D6F95',
              height: height / 5,
            }}
            action={{
              label: 'موافق',
              onPress: () => {
                // Do something
              },
            }}>
            {'لتبدأ الرحلة فعل الزر في الأعلى'}
          </Snackbar>
        </LinearGradient>
      </View>
    </Container>
  );
};
