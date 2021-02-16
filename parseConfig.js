import AsyncStorage from '@react-native-community/async-storage';
import {Parse} from 'parse/react-native';

const Parse_Url = 'http://178.128.81.16:1337/parse';
const WS_Url = 'ws://178.128.81.16:1337/parse';
const Application_ID = 'myAppId';
const javascriptKey = 'Ride';

const Init_Parse = () => {
  Parse.setAsyncStorage(AsyncStorage);
  Parse.initialize(Application_ID, javascriptKey, 'rideMasterKey');
  Parse.serverURL = Parse_Url;
  Parse.liveQueryServerURL = WS_Url;
};

export default Init_Parse;
