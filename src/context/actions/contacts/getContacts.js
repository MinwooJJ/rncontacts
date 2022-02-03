import axios from '@helpers/axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
} from '../../../constants/actionTypes';

export default () => dispatch => {
  dispatch({
    type: GET_CONTACTS_LOADING,
  });

  axios
    .get('/contacts')
    .then(res => {
      dispatch({
        type: GET_CONTACTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: GET_CONTACTS_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong, try again'},
      });
    });
};
