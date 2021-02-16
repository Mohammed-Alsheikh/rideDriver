import React from 'react';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './src/navigation';
import {StatusBar} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/store';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Colors from './src/views/styles';
import parseConfig from './parseConfig';

parseConfig();
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    //accent: '#f1c40f',
  },
};

let Navigation = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
          <Navigation />
        </PaperProvider>
      </StoreProvider>
    );
  }
}
