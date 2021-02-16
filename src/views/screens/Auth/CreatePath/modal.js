import React, {useCallback} from 'react';
import {Modal, Portal} from 'react-native-paper';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import styles, {colorsArray} from './moda.styles';
import LinearGradient from 'react-native-linear-gradient';
import {Text, TextInput, useTextInput} from '../../../lib';
import reactotron from 'reactotron-react-native';

export default ({onConfirm, onCancel, visible, setVisible}) => {
  const name = useTextInput('');

  const onDismiss = useCallback(() => {
    setVisible(false);
    return true;
  }, [setVisible]);

  const onShow = useCallback(() => {
    setVisible(true);
    return true;
  }, [setVisible]);

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.modal}>
        <Text textAlign="center" style={styles.detailText}>
          {'الرجاء ادخال اسم الموقف'}
        </Text>
        <View style={{alignSelf: 'stretch', backgroundColor: 'white'}}>
          <TextInput placeholder="ادخل الاسم" {...name} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button
            title="موافق"
            type="outline"
            containerStyle={{paddingVertical: 20, right: 20}}
            buttonStyle={styles.buttonsnack}
            titleStyle={{color: '#fff'}}
            onPress={() => onDismiss() && (onConfirm && onConfirm(name.value))}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: colorsArray,
              start: {x: 0, y: 0.5},
              end: {x: 1, y: 0.5},
            }}
          />
          <Button
            title="الغاء"
            type="outline"
            containerStyle={{paddingVertical: 20, left: 20}}
            buttonStyle={styles.buttonsnack1}
            titleStyle={{color: '#fff'}}
            onPress={() => onDismiss() && (onCancel && onCancel())}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: colorsArray,
              start: {x: 0, y: 0.5},
              end: {x: 1, y: 0.5},
            }}
          />
        </View>
      </Modal>
    </Portal>
  );
};
