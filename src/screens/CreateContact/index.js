import React, {useState, useContext} from 'react';
import CreateContactComponent from '@components/CreateContactComponent';
import {GlobalContext} from '@context/Provider';
import createContact from '@context/actions/contacts/createContact';
import {useNavigation} from '@react-navigation/native';
import {CONTACT_LIST} from '../../constants/routeNames';

export default function CreateContact() {
  const {navigate} = useNavigation();

  const {
    contactsDispatch,
    contactsState: {
      createContact: {loading, error},
    },
  } = useContext(GlobalContext);
  const [form, setForm] = useState({});

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    createContact(form)(contactsDispatch)(() => {
      navigate(CONTACT_LIST);
    });
  };

  return (
    <CreateContactComponent
      onSubmit={onSubmit}
      onChangeText={onChangeText}
      form={form}
      setForm={setForm}
      loading={loading}
      error={error}
    />
  );
}
