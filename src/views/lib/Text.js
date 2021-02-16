import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';

export default ({theme = 'regular', style, children}) => {
  return <Text style={{...styles.text(theme), ...style}}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: theme => {
    switch (theme) {
      case 'regular': {
        return {
          fontFamily:
            Platform.OS === 'ios' ? 'TajawalRegular' : 'Tajawal-Regular',
        };
      }
      case 'medium': {
        return {
          fontFamily:
            Platform.OS === 'ios' ? 'TajawalMedium' : 'Tajawal-Medium',
        };
      }
    }
  },
});
