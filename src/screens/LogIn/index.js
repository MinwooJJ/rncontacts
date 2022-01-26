import React, {useState, useContext} from 'react';
import {GlobalContext} from '@context/Provider';
import Login from '@components/Login';
import loginUser from '@context/actions/auth/loginUser';
import Message from '@components/common/Message';

export default function LogIn() {
  const [form, setForm] = useState({});
  const {
    authDispatch,
    authState: {loading, error, isLoggedIn},
  } = useContext(GlobalContext);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };
  const onSubmit = () => {
    if (form.userName && form.password) {
      loginUser(form)(authDispatch);
    }
  };

  return (
    <Login
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      error={error}
      loading={loading}
    />
  );
}
