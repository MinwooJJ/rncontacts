import axios from '@helpers/axiosInstance';
import {
  DELETE_CONTACTS_LOADING,
  DELETE_CONTACTS_SUCCESS,
  DELETE_CONTACTS_FAIL,
} from '../../../constants/actionTypes';

export default id => dispatch => onSuccess => {
  dispatch({
    type: DELETE_CONTACTS_LOADING,
  });

  axios
    .delete(`/contacts/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_CONTACTS_SUCCESS,
        payload: id,
      });

      onSuccess();
    })
    .catch(err => {
      dispatch({
        type: DELETE_CONTACTS_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong, try again'},
      });
    });
};
