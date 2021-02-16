import React from 'react';
import {Modal, Portal} from 'react-native-paper';
import {Text} from '../lib';
import styles from './styles';
import {Button} from 'react-native-elements';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {height, width} from '../styles';

export const Snack = ({display, dismiss, showTrip}) => {
  const ModalTrigger = () => {
    showTrip();
    dismiss();
  };

  return (
    <Portal>
      <Modal
        visible={display}
        onDismiss={dismiss}
        contentContainerStyle={{
          height: height / 6,
          width: width - 28,
          borderRadius: 20,
          alignItems: 'center',
        }}>
        <Text textAlign="center" color="#FFFF" style={styles.detailText}>
          سيتم عرض الحافلات الخاصة بهذا الموقف
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button
            title="موافق"
            type="outline"
            containerStyle={{paddingVertical: 20, right: 20}}
            buttonStyle={{
              borderColor: '#fff',
              borderRadius: 90,
              borderWidth: 2,
              paddingHorizontal: 20,
            }}
            titleStyle={{color: '#fff'}}
            onPress={ModalTrigger}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: [
                '#0C4563',
                '#0D4E6E',
                '#0D4E6E',
                '#0D4E6E',
                '#0D4E6E',
                '#0E81AC',
                '#0E81AC',
              ],
              start: {x: 0, y: 0.5},
              end: {x: 1, y: 0.5},
            }}
          />
          <Button
            title="الغاء"
            type="outline"
            containerStyle={{paddingVertical: 20, left: 20}}
            buttonStyle={{
              borderColor: '#fff',
              borderRadius: 90,
              borderWidth: 2,
              paddingHorizontal: 25,
            }}
            titleStyle={{color: '#fff'}}
            onPress={dismiss}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: [
                '#0C4563',
                '#0D4E6E',
                '#0D4E6E',
                '#0D4E6E',
                '#0D4E6E',
                '#0E81AC',
                '#0E81AC',
              ],
              start: {x: 0, y: 0.5},
              end: {x: 1, y: 0.5},
            }}
          />
        </View>
      </Modal>
    </Portal>
  );
};
