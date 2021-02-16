import React, {useState} from 'react';
import {Container} from 'native-base';
import {View, Image, Text, StyleSheet} from 'react-native';
import Colors, {width, height} from '../../styles';
import LinearGradient from 'react-native-linear-gradient';
import {Paragraph, Caption} from 'react-native-paper';

export default ({navigation}) => {
  const LOGO = require('../../assets/Logo/logo2.png');

  return (
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
      <View
        style={{height: height, width: width, backgroundColor: 'transparent'}}>
        <Image
          source={LOGO}
          resizeMode="contain"
          resizeMethod="resize"
          style={{width: 220, height: 220, alignSelf: 'center', marginTop: 10}}
        />
        <Text style={styles.textContainer}>
          {
            ' هو التطبيق الأول لمعرفة مواقع الحافلات في المنطقة من اجل رحلة آمنة وموثوقة و معرفة موقع الحافلات. '
          }
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    fontSize: 24,
    color: '#fff',
    marginVertical: 60,
    marginHorizontal: 28,
    padding: 2,
    margin: 2,
  },
});
