import axiosInstance from '@helpers/axiosInstance';
import {
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  CLEAR_AUTH_STATE,
} from '../../../constants/actionTypes';

export const clearAuthState = () => dispatch => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};

export default ({
    email,
    password,
    userName: username,
    firstName: first_name,
    lastName: last_name,
  }) =>
  dispatch =>
  onSuccess => {
    dispatch({
      type: REGISTER_LOADING,
    });

    axiosInstance
      .post('auth/register', {
        email,
        password,
        username,
        first_name,
        last_name,
      })
      .then(res => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });

        // 로그인 성공 후 callback을 실행시켜 login 스크린으로 보내줌
        onSuccess(res.data);
      })
      .catch(err => {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong'},
        });
      });
  };
