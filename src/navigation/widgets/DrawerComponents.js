import React from 'react';
import Text from '../../views/lib/Text';
import Fonts from '../../views/styles/fonts';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const DrawerLabel = ({tintColor, txt, style}) => {
  return (
    <Text
      style={{
        fontSize: Fonts.Size,
        margin: 12,
        color: tintColor,
        ...style,
      }}>
      {txt}
    </Text>
  );
};

export const DrawerIcon = props => {
  return <Icon {...props} />;
};
