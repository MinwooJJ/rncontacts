import axios from '@helpers/axiosInstance';
import {
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_FAIL,
} from '../../../constants/actionTypes';

export default form => dispatch => onSuccess => {
  const requestPayload = {
    country_code: form.phoneCode || '',
    first_name: form.firstName || '',
    last_name: form.lastname || '',
    phone_number: form.phoneNumber || '',
    contact_picture: form.contactPicture || null,
    is_favorite: false,
  };

  dispatch({
    type: CREATE_CONTACT_LOADING,
  });

  axios
    .post('/contacts', requestPayload)
    .then(res => {
      dispatch({
        type: CREATE_CONTACT_SUCCESS,
        payload: res.data,
      });

      // contact 생성 후 callback을 실행시켜 contacts 스크린으로 보내줌
      onSuccess();
    })
    .catch(err => {
      dispatch({
        type: CREATE_CONTACT_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong, try again'},
      });
    });
};
