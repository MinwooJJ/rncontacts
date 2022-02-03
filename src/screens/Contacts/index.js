import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from '@components/common/Icon';
import ContactsComponent from '@components/ContactsComponent';
import {GlobalContext} from '@context/Provider';
import getContacts from '@context/actions/contacts/getContacts';

export default function Contacts() {
  // Navigation 컴포넌트가 아닌 직접 사용하는 스크린 컴포넌트에서 설정 가능
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const {
    contactsDispatch,
    contactsState: {
      getContacts: {data, loading},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getContacts()(contactsDispatch);
  }, []);

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Icon type="material" size={25} name="menu" style={{padding: 10}} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <ContactsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      data={data}
      loading={loading}
    />
  );
}
