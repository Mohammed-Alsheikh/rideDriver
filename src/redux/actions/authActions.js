import ACTION_TYPES from '../constants';
import Parse from 'parse/react-native';
import r from 'reactotron-react-native';

export const registerUser = (
  username,
  email,
  phone,
  password,
  color,
  number,
  type,
  count,
  navigateToLicence,
) => async dispatch => {
  try {
    //User record.
    const User = new Parse.User();
    User.set('username', username);
    User.set('password', password);
    User.set('email', email);
    User.set('mail', email);
    User.set('phone', phone);
    User.set('isDriver', true);
    await User.signUp();

    // Bus record.
    const Bus = Parse.Object.extend('Bus');
    const busObj = new Bus();
    busObj.set('color', color);
    busObj.set('number', number);
    busObj.set('type', type);
    busObj.set('count', Number(count));
    busObj.set('driver', {
      __type: 'Pointer',
      className: '_User',
      objectId: User.id,
    });
    await busObj.save();

    // Driver record
    const driver = Parse.Object.extend('Driver');
    const driverObj = new driver();
    driverObj.set('user', {
      __type: 'Pointer',
      className: '_User',
      objectId: User.id,
    });
    await driverObj.save();

    User.set('driver', {
      __type: 'Pointer',
      className: 'Driver',
      objectId: driverObj.id,
    });

    User.set('bus', {
      __type: 'Pointer',
      className: 'Bus',
      objectId: busObj.id,
    });
    await User.save();

    dispatch({
      type: ACTION_TYPES.FETCH,
      payload: {
        id: User.id,
        username: User.get('username'),
        email: User.get('email'),
        phone: User.get('phone'),
        isDriver: User.get('isDriver'),
        status: User.get('status'),
        color: busObj.get('color'),
        number: busObj.get('number'),
        type: busObj.get('type'),
        count: busObj.get('count'),
      },
    });
    navigateToLicence();
  } catch (error) {
    r.logImportant(error.message);
    dispatch({
      type: ACTION_TYPES.AUTH_ERROR,
      payload: error.message,
    });
  }
};

export const loginUser = (username, password) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.CLEAR,
  });
  try {
    const res = await Parse.User.logIn(username, password);
    if (res.get('isDriver') === false) {
      dispatch({
        type: ACTION_TYPES.AUTH_ERROR,
        payload: 'Invalid username/password. haaa',
      });
      return;
    }
    const user = await fetchUser(res.id, dispatch);
    dispatch({
      type: ACTION_TYPES.FETCH,
      payload: {
        id: user.id,
        username: user.get('username'),
        email: user.get('email'),
        phone: user.get('phone'),
        isDriver: user.get('isDriver'),
        status: user.get('status'),
        color: user.get('bus').get('color'),
        number: user.get('bus').get('number'),
        type: user.get('bus').get('type'),
        count: user.get('bus').get('count'),
      },
    });
  } catch (error) {
    dispatch({
      type: ACTION_TYPES.AUTH_ERROR,
      payload: error.message,
    });
  }
};

export const logout = () => dispatch => {
  dispatch({type: ACTION_TYPES.LOGOUT});
};

export const fetchUser = async id => {
  const User = new Parse.User();
  const query = new Parse.Query(User);
  query.include('bus');
  const user = await query.get(id);
  r.log({fetch: user});
  return user;
};

export const uploadImage = (image, type) => async (dispatch, getState) => {
  r.logImportant(image);
  const id = getState().user.value.id;
  const query = new Parse.Query('_User');
  const obj = await query.get(id);
  r.logImportant({fetchedObj: obj});
  type === 'License'
    ? obj.set('license', new Parse.File(image.fileName, {base64: image.data}))
    : obj.set('identity', new Parse.File(image.fileName, {base64: image.data}));

  await obj.save();
};

export const resetPassword = password => async dispatch => {
  try {
    const user = Parse.User.current();
    user.setPassword(password);
    await user.save();
  } catch (error) {
    r.logImportant({e: error.message});
    dispatch({
      type: ACTION_TYPES.AUTH_ERROR,
      payload: error.message,
    });
  }
};
