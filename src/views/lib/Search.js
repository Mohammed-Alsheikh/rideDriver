import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';
import * as Animate from 'react-native-animatable';
import {StyleSheet} from 'react-native';
import Fonts from '../styles/fonts';

export default props => {
  const [FirstQuery, setFirstQuery] = useState('');
  return (
    <Animate.View animation="slideInLeft" duration={1000}>
      <Searchbar
        placeholder="ابحث عن وجهة"
        visible={props.display}
        query={FirstQuery}
        onChangeText={query => setFirstQuery(query)}
        onIconPress={props.visible}
        inputStyle={styles.input}
        focus={true}
        style={{borderRadius: 30, marginHorizontal: 6, marginVertical: 8}}
      />
    </Animate.View>
  );
};

const styles = StyleSheet.create({
  input: {
    textAlign: Fonts.AlignText,
    fontFamily: Fonts.Type,
    fontSize: Fonts.Size,
    color: Fonts.color,
  },
});
