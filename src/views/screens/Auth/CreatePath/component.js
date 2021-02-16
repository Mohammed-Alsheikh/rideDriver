import React, {useState, useCallback} from 'react';
import {Snackbar} from 'react-native-paper';
import {StackActions} from 'react-navigation';
import {ROUTES} from '../../../constants';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {Content, Container} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {height, width} from '../../../styles';
import Map from '../../../Map';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import Strings from '../../../../localization';
import _ from 'lodash';
import Modal from './modal';
import reactotron from 'reactotron-react-native';

export default ({navigation}) => {
  const [visible, setVisible] = useState(true);
  const [checkpoints, setCheckpoints] = useState([]);
  const [current, setCurrent] = useState(null);
  const [visibleModal, setVisibleModal] = useState(false);

  const onPickLocation = useCallback(e => {
    setCurrent(e.nativeEvent.coordinate);
    setVisibleModal(true);
  }, []);

  const popCheckpoint = () => setCheckpoints(_.initial(checkpoints));

  const clearCheckpoints = () => setCheckpoints([]);

  const onConfirm = checkpointName => {
    setCheckpoints(
      _.concat(checkpoints, [{coordinate: current, name: checkpointName}]),
    );
  };

  const onCancel = useCallback(() => {}, []);

  return (
    <View style={{flex: 1}}>
      <Map {...{onPickLocation, checkpoints, navigation}} />
      <Modal
        {...{onConfirm, onCancel}}
        visible={visibleModal}
        setVisible={setVisibleModal}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 32,
          right: 12,
          flexDirection: 'column-reverse',
        }}>
        <View style={BUTTON_STYLE}>
          <TouchableOpacity onPress={clearCheckpoints} activeOpacity={0.5}>
            <Icon name="close" color="white" style={{fontSize: 38}} />
          </TouchableOpacity>
        </View>

        <View style={BUTTON_STYLE}>
          <TouchableOpacity
            onPress={() => {
              /* TODO: yazan put your actions here */
            }}
            activeOpacity={0.5}>
            <Icon name="done-all" color="white" style={{fontSize: 38}} />
          </TouchableOpacity>
        </View>

        <View style={BUTTON_STYLE}>
          <TouchableOpacity onPress={popCheckpoint} activeOpacity={0.5}>
            <Icon
              name="settings-backup-restore"
              color="white"
              style={{fontSize: 38}}
            />
          </TouchableOpacity>
        </View>
      </View>

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
            setVisible(!visible);
          }}
          style={{
            borderRadius: 20,
            backgroundColor: '#0C415F',
            height: height / 7,
            marginVertical: 66,
            marginHorizontal: 22,
            fontSize: 16,
          }}
          action={{
            label: Strings.agree,
            onPress: () => {
              // Do something
            },
          }}>
          {Strings.CreatePathSnackOne}
          {Strings.CreatePathSnackTwo}
        </Snackbar>
      </LinearGradient>
    </View>
  );
};

const BUTTON_STYLE = {
  padding: 12,
  marginVertical: 5,
  width: 60,
  height: 60,
  backgroundColor: '#0E82AC',
  borderRadius: 44,
  justifyContent: 'center',
  alignItems: 'center',
};
