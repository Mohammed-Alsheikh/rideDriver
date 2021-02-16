import ACTION_TYPES from '../constants';

const initialState = {
  value: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH: {
      return {
        value: action.payload,
      };
    }
    case ACTION_TYPES.LOGOUT: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
}
