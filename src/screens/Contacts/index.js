import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from '@components/common/Icon';
import ContactsComponent from '@components/ContactsComponent';
import {GlobalContext} from '@context/Provider';
import getContacts from '@context/actions/contacts/getContacts';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CONTACT_DETAIL} from '../../constants/routeNames';

export default function Contacts() {
  // Navigation 컴포넌트가 아닌 직접 사용하는 스크린 컴포넌트에서 설정 가능
  const {setOptions, toggleDrawer, navigate} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState('');

  const contactsRef = useRef([]);

  const {
    contactsDispatch,
    contactsState: {
      getContacts: {data, loading},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getContacts()(contactsDispatch);
  }, []);

  const getSettings = async () => {
    const sortPref = await AsyncStorage.getItem('sortBy');

    if (sortPref) {
      setSortBy(sortPref);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getSettings();

      return () => {};
    }, []),
  );

  useEffect(() => {
    const prev = contactsRef.current;

    contactsRef.current = data;
    const newList = contactsRef.current;

    if (newList.length - prev.length === 1) {
      const newContact = newList.find(
        item => !prev.map(i => i.id).includes(item.id),
      );

      navigate(CONTACT_DETAIL, {item: newContact});
    }
  }, [data.length]);

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
      sortBy={sortBy}
    />
  );
}
