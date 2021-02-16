/**
 * @format
 */

import './reactotronConfig';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as ride} from './app.json';

console.disableYellowBox = true;
AppRegistry.registerComponent(ride, () => App);
