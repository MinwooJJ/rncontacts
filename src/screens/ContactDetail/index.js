import {useRoute, useNavigation} from '@react-navigation/native';
import React, {useEffect, useContext, useRef, useState} from 'react';
import ContactDetailsComponent from '@components/ContactDetailsComponent';
import {
  Text,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Icon from '@components/common/Icon';
import colors from '@assets/theme/colors';
import {GlobalContext} from '@context/Provider';
import deleteContact from '@context/actions/contacts/deleteContact';
import {CONTACT_LIST} from '../../constants/routeNames';
import uploadImage from '@helpers/uploadImage';
import editContact from '@context/actions/contacts/editContact';

export default function ContactDetail() {
  // 옵셔널 체이닝과 같이 undefined 에러를 방지하는 방법
  const {params: {item = {}} = {}} = useRoute();
  const {
    contactsDispatch,
    contactsState: {
      deleteContact: {loading},
    },
  } = useContext(GlobalContext);
  const {setOptions, navigate} = useNavigation();
  const [localFile, setLocalFile] = useState(null);
  const [updatingImage, setUpdatingImage] = useState(false);
  const [uploadSucceeded, setUploadSucceeded] = useState(false);

  const sheetRef = useRef();

  useEffect(() => {
    if (item) {
      setOptions({
        title: item.first_name + ' ' + item.last_name,
        headerRight: () => {
          return (
            <View style={{flexDirection: 'row', paddingRight: 10}}>
              <TouchableOpacity>
                <Icon
                  size={21}
                  color={colors.grey}
                  name={item.is_favorite ? 'start' : 'star-border'}
                  type="material"
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{paddingLeft: 10}}
                onPress={() => {
                  Alert.alert(
                    'Delete!',
                    'Are you sure you want to delete?' + item.first_name,
                    [
                      {text: 'Cancel', onPress: () => {}},
                      {
                        text: 'OK',
                        onPress: () => {
                          deleteContact(item.id)(contactsDispatch)(() => {
                            navigate(CONTACT_LIST);
                          });
                        },
                      },
                    ],
                  );
                }}>
                {loading ? (
                  <ActivityIndicator size="small" color={colors.primary} />
                ) : (
                  <Icon
                    size={21}
                    color={colors.grey}
                    name="delete"
                    type="material"
                  />
                )}
              </TouchableOpacity>
            </View>
          );
        },
        headerLeft: () => {
          return (
            <View>
              <Text>Hello</Text>
            </View>
          );
        },
      });
    }
  }, [item, loading]);

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };

  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  const onFileSelected = images => {
    setLocalFile(images);
    closeSheet();
    setUpdatingImage(true);

    uploadImage(localFile)(url => {
      const {
        first_name: firstName,
        phone_number: phoneNumber,
        last_name: lastName,
        is_favorite: isFavorite,
        country_code: countryCode,
      } = item;

      editContact(
        {
          firstName,
          phoneNumber,
          lastName,
          isFavorite,
          countryCode,
          contactPicture: url,
        },
        item?.id,
      )(contactsDispatch)(item => {
        setUpdatingImage(false);
        setUploadSucceeded(true);
      });
    })(err => {
      setUpdatingImage(false);
      console.log('error', err);
    });
  };

  return (
    <ContactDetailsComponent
      contact={item}
      sheetRef={sheetRef}
      onFileSelected={onFileSelected}
      openSheet={openSheet}
      localFile={localFile}
      updatingImage={updatingImage}
      uploadSucceeded={uploadSucceeded}
    />
  );
}
