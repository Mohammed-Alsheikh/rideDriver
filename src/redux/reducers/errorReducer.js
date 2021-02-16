import ACTION_TYPES from '../constants';

const initialState = {
  value: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.AUTH_ERROR: {
      return {
        value: action.payload,
      };
    }
    case ACTION_TYPES.CLEAR: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
}
