import React from 'react';
import {
  StyleSheet,
  Linking,
  Platform,
  TouchableOpacity,
  Alert,
  View,
} from 'react-native';
import {Container} from 'native-base';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import {Card, Title, Text} from 'react-native-paper'; //TODO
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ROUTES} from '../../views/constants';
import Fonts from '../../views/styles/fonts';

export const CustomDrawer = props => {
  const {navigation, user} = props;

  const makeCall = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${1234567890}';
    } else {
      phoneNumber = 'telprompt:${1234567890}';
    }

    Linking.openURL(phoneNumber);
  };

  const _Logout = () => {
    Alert.alert(
      'تسجيل الخروج ',
      'هل تريد تسجيل الخروج؟',
      [
        {
          text: 'ألغاء',
          onPress: () => {
            return null;
          },
        },
        {
          text: 'تأكيد',
          onPress: () => {
            props.logout();
            navigation.navigate(ROUTES.AuthNavigator);
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <Container style={{flex: 1, backgroundColor: '#EFEFF4'}}>
      <Card style={{paddingVertical: 12, marginVertical: 8}}>
        <Card.Content
          style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Title
            style={{
              top: 18,
              fontSize: Fonts.Size,
              fontFamily: Fonts.Type,
              left: 20,
            }}>
            {user?.username}
          </Title>
          <Avatar
            size={68}
            icon={{name: 'user', type: 'font-awesome', color: '#fff'}}
            rounded
            overlayContainerStyle={{backgroundColor: '#29ABE2'}}
          />
        </Card.Content>
      </Card>
      <DrawerNavigatorItems {...props} />
      <TouchableOpacity activeOpacity={0.9} onPress={makeCall}>
        <View style={{flexDirection: 'row-reverse', marginVertical: 3}}>
          <Icon style={styles.icon} name="phone" size={20} />
          <Text style={styles.detailText}>الاتصال بالادارة</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.9} onPress={_Logout}>
        <View style={{flexDirection: 'row-reverse', marginVertical: 3}}>
          <Icon style={styles.icon1} name="arrow-forward" size={20} />
          <Text style={styles.detailText1}>تسجيل الخروج</Text>
        </View>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  detailText: {
    fontSize: Fonts.Size,
    color: Fonts.color,
    fontFamily: Fonts.Type,
    paddingRight: 28,
    top: 4,
  },
  icon: {
    color: '#6E6E70',
    alignSelf: 'flex-start',
    marginVertical: 5,
    paddingRight: 16,
  },
  icon1: {
    color: '#6E6E70',
    alignSelf: 'flex-start',
    marginVertical: 5,
    paddingRight: 16,
    top: 6,
  },
  detailText1: {
    fontSize: Fonts.Size,
    color: Fonts.color,
    fontFamily: Fonts.Type,
    position: 'absolute',
    paddingRight: 65,
    top: 10,
  },
});
