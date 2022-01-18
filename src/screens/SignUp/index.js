import React, {useState, useEffect} from 'react';
import Signup from '@components/Signup';
import axiosInstance from '@helpers/axiosInstance';

export default function SignUp() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axiosInstance
      .get('/contacts')
      .catch(err => console.log('axios error: ', err));
  }, []);

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
    console.log(form);

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
  };

  return (
    <Signup
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      errors={errors}
    />
  );
}
