import React, {useState, useContext, useEffect, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import Signup from '@components/Signup';
import register, {clearAuthState} from '@context/actions/auth/register';
import {GlobalContext} from '@context/Provider';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '@constants/routeNames';

export default function SignUp() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {navigate} = useNavigation();
  const {
    authDispatch,
    authState: {loading, data, error},
  } = useContext(GlobalContext);

  useFocusEffect(
    useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error]),
  );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'This is field need min 6 characters'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please add a User Name'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please add a First Name'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please add a Last Name'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add a Name'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add a Password'};
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      // Passed validation
      register(form)(authDispatch)(userData => {
        navigate(LOGIN, {data: userData});
      });
    }
  };

  return (
    <Signup
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
}
