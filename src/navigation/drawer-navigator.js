import 'react-native-gesture-handler';
import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {CustomDrawer} from './widgets';
import {ROUTES} from '../views/constants';
import {DrawerLabel as Label, DrawerIcon as Icon} from './widgets';

import HomeScreen from '../views/screens/Home';
import ProfileScreen from '../views/screens/Profile';
import AboutScreen from '../views/screens/About';

export default createDrawerNavigator(
  {
    [ROUTES.Home]: {
      screen: HomeScreen,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon style={{color: tintColor}} name="map" size={19} />
        ),
        drawerLabel: ({tintColor}) => (
          <Label tintColor={tintColor} txt={'الخريطة'} />
        ),
      },
    },
    [ROUTES.Profile]: {
      screen: ProfileScreen,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon style={{color: tintColor}} name="person-pin" size={19} />
        ),
        drawerLabel: ({tintColor}) => (
          <Label tintColor={tintColor} txt={'الملف الشخصي'} />
        ),
      },
    },
    [ROUTES.About]: {
      screen: AboutScreen,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon style={{color: tintColor}} name="message" size={19} />
        ),
        drawerLabel: ({tintColor}) => (
          <Label tintColor={tintColor} txt={'معلومات عنا'} />
        ),
      },
    },
  },
  {
    drawerPosition: 'left',
    drawerType: 'front',
    initialRouteName: ROUTES.Home,
    keyboardDismissMode: 'on-drag',
    overlayColor: 0,
    order: [ROUTES.Home, ROUTES.Profile, ROUTES.About],
    contentComponent: props => <CustomDrawer {...props} />,
    contentOptions: {
      activeTintColor: '#29ABE2',
      inactiveTintColor: '#6E6E70',
      itemsContainerStyle: {
        // opacity: 1
      },
      iconContainerStyle: {
        // opacity: 1
      },
      itemStyle: {
        flexDirection: 'row-reverse',
      },
    },
  },
);
