import React, {useState, useContext, useRef, useEffect} from 'react';
import CreateContactComponent from '@components/CreateContactComponent';
import {GlobalContext} from '@context/Provider';
import createContact from '@context/actions/contacts/createContact';
import editContact from '@context/actions/contacts/editContact';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CONTACT_LIST, CONTACT_DETAIL} from '../../constants/routeNames';
import uploadImage from '@helpers/uploadImage';
import countryCodes from '@utils/countryCodes';

export default function CreateContact() {
  const {navigate, setOptions} = useNavigation();
  const {params} = useRoute();

  const {
    contactsDispatch,
    contactsState: {
      createContact: {loading, error},
    },
  } = useContext(GlobalContext);
  const sheetRef = useRef(null);
  const [form, setForm] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const [localFile, setLocalFile] = useState(null);

  useEffect(() => {
    if (params?.contact) {
      setOptions({title: 'Update contact'});

      const {
        first_name: firstName,
        phone_number: phoneNumber,
        last_name: lastName,
        is_favorite: isFavorite,
        country_code: countryCode,
      } = params?.contact;

      setForm(prev => {
        return {
          ...prev,
          firstName,
          phoneNumber,
          lastName,
          isFavorite,
          phoneCode: countryCode,
        };
      });

      const country = countryCodes.find(item => {
        return item.value.replace('+', '') === countryCode;
      });

      if (country) {
        setForm(prev => {
          return {...prev, countryCode: country.key.toUpperCase()};
        });
      }

      if (params?.contact?.contact_picture) {
        setLocalFile(params?.contact?.contact_picture);
      }
    }
  }, []);

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    setIsUploading(true);

    if (params?.contact) {
      if (localFile?.size) {
        uploadImage(localFile)(url => {
          setIsUploading(false);

          editContact(
            {...form, contactPicture: url},
            params?.contact?.id,
          )(contactsDispatch)(item => {
            navigate(CONTACT_DETAIL, {item});
          });
        })(err => {
          setIsUploading(false);
          console.log('error', err);
        });
      } else {
        editContact(form, params?.contact?.id)(contactsDispatch)(item => {
          navigate(CONTACT_DETAIL, {item});
        });
      }
    } else {
      if (localFile?.size) {
        uploadImage(localFile)(url => {
          setIsUploading(false);

          createContact({...form, contactPicture: url})(contactsDispatch)(
            () => {
              navigate(CONTACT_LIST);
            },
          );
        })(err => {
          setIsUploading(false);
          console.log('error', err);
        });
      } else {
        createContact(form)(contactsDispatch)(() => {
          navigate(CONTACT_LIST);
        });
      }
    }
  };

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

  const toggleValueChange = () => {
    setForm({...form, isFavoriate: !form.isFavoriate});
  };

  const onFileSelected = images => {
    setLocalFile(images);
    closeSheet();
  };

  return (
    <CreateContactComponent
      onSubmit={onSubmit}
      onChangeText={onChangeText}
      form={form}
      setForm={setForm}
      loading={loading || isUploading}
      error={error}
      toggleValueChange={toggleValueChange}
      sheetRef={sheetRef}
      openSheet={openSheet}
      closeSheet={closeSheet}
      onFileSelected={onFileSelected}
      localFile={localFile}
    />
  );
}
