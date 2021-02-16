import {combineReducers} from 'redux';

import user from './authReducer';
import error from './errorReducer';

export default combineReducers({
  user,
  error,
});
