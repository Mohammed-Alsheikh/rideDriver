import {applyMiddleware, createStore, compose} from 'redux';
import reactotron from '../../../reactotronConfig';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunkMiddleware),
    reactotron.createEnhancer(),
  ),
);

export default store;
