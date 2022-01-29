import {
  REGISTER_LOADING,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  CLEAR_AUTH_STATE,
} from '../../constants/actionTypes';

const auth = (state, {type, payload}) => {
  switch (type) {
    case LOGIN_LOADING:
    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        isLoggedIn: true,
      };

    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case LOGOUT_USER:
      return {
        ...state,
        loading: false,
        data: null,
        isLoggedIn: false,
      };

    case CLEAR_AUTH_STATE:
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
      };

    default:
      return state;
  }
};

export default auth;
