import axios from '@helpers/axiosInstance';
import {
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_SUCCESS,
  EDIT_CONTACT_FAIL,
} from '../../../constants/actionTypes';

export default (form, id) => dispatch => onSuccess => {
  const requestPayload = {
    country_code: form.phoneCode || '',
    first_name: form.firstName || '',
    last_name: form.lastname || '',
    phone_number: form.phoneNumber || '',
    contact_picture: form.contactPicture || null,
    is_favorite: form.isFavorite || false,
  };

  dispatch({
    type: EDIT_CONTACT_LOADING,
  });

  axios
    .put(`/contacts/${id}`, requestPayload)
    .then(res => {
      dispatch({
        type: EDIT_CONTACT_SUCCESS,
        payload: res.data,
      });

      // contact 생성 후 callback을 실행시켜 contacts 스크린으로 보내줌
      onSuccess(res.data);
    })
    .catch(err => {
      dispatch({
        type: EDIT_CONTACT_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong, try again'},
      });
    });
};
