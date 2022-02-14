import React, {useState, useContext, useRef} from 'react';
import CreateContactComponent from '@components/CreateContactComponent';
import {GlobalContext} from '@context/Provider';
import createContact from '@context/actions/contacts/createContact';
import {useNavigation} from '@react-navigation/native';
import {CONTACT_LIST} from '../../constants/routeNames';
import uploadImage from '@helpers/uploadImage';

export default function CreateContact() {
  const {navigate} = useNavigation();

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

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    setIsUploading(true);
    if (localFile?.size) {
      uploadImage(localFile)(url => {
        setIsUploading(false);

        createContact({...form, contactPicture: url})(contactsDispatch)(() => {
          navigate(CONTACT_LIST);
        });
      })(err => {
        setIsUploading(false);

        console.log('error', err);
      });
    }

    createContact(form)(contactsDispatch)(() => {
      navigate(CONTACT_LIST);
    });
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
