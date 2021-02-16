import React, {useState} from 'react';
import {Modal, Portal} from 'react-native-paper';
import {View, TouchableOpacity, Keyboard} from 'react-native';
import {Snackbar} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {gradientColors} from '../styles';
import {Input} from 'react-native-elements';
import Text from '../lib/Text';
import {modalStyles as styles} from './styles';
import r from 'reactotron-react-native';
import {Container} from 'native-base';

export default ({display, dismiss, reset}) => {
  const [password, setPassword] = useState('');
  const [verify, setVerify] = useState('');
  const [snack, setSnack] = useState({visible: false, msg: ''});
  const onSubmit = () => {
    if ((password === verify) & (password != '') & (verify != '')) {
      reset(password);
      dismiss(true);
      setPassword('') & setVerify('');
      setSnack({visible: true, msg: 'تم تغير كلمة المرور بنجاح'});
    } else {
      Keyboard.dismiss();
      setPassword('') & setVerify('');
      setSnack({visible: true, msg: 'كلمة المرور غير متطابقة'});
    }
  };
  return (
    <Container style={{flex: 1}}>
      <Portal>
        <Modal
          visible={display}
          onDismiss={dismiss}
          contentContainerStyle={styles.modalpassword}>
          <Text style={styles.textmodal}>تغير كلمة المرور</Text>
          <View style={styles.border} />
          <Input
            placeholder="كلمة المرور "
            inputContainerStyle={styles.input}
            inputStyle={styles.inputtext}
            blurOnSubmit={false}
            autoFocus={true}
            value={password}
            secureTextEntry={true}
            onChangeText={val => setPassword(val)}
          />
          <Input
            placeholder="تأكيد كلمة المرور"
            inputContainerStyle={styles.input}
            inputStyle={styles.inputtext}
            blurOnSubmit={false}
            value={verify}
            secureTextEntry={true}
            onChangeText={val => setVerify(val)}
          />
          <View style={styles.border} />
          <TouchableOpacity
            style={styles.button}
            activeOpacity={1}
            onPress={onSubmit}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={gradientColors}
              style={styles.gradent}>
              <Text style={styles.Textbutton}>حفظ</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={dismiss}
            onPressOut={() => setPassword('') & setVerify('')}
            activeOpacity={1}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={gradientColors}
              style={styles.gradent}>
              <Text style={styles.Textbutton}>الغاء</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Modal>
        <Snackbar
          onDismiss={() => setSnack({visible: false, msg: ''})}
          duration={5000}
          style={{backgroundColor: '#0C4563', borderRadius: 60}}
          visible={snack.visible}>
          {snack.msg}
        </Snackbar>
      </Portal>
    </Container>
  );
};
