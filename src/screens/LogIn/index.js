import React, {useState, useContext, useEffect} from 'react';
import {GlobalContext} from '@context/Provider';
import Login from '@components/Login';
import loginUser from '@context/actions/auth/loginUser';
import Message from '@components/common/Message';
import {useRoute} from '@react-navigation/native';

export default function LogIn() {
  const [form, setForm] = useState({});
  const [justSignup, setJustSignup] = useState(false);
  const {params} = useRoute();
  const {
    authDispatch,
    authState: {loading, error},
  } = useContext(GlobalContext);

  useEffect(() => {
    if (params?.data) {
      setJustSignup(true);
      setForm({...form, userName: params.data.username});
    }
  }, [params]);

  const onChange = ({name, value}) => {
    setJustSignup(false);
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
      justSignup={justSignup}
    />
  );
}
