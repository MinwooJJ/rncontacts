import React from 'react';
import {View} from 'react-native';
import AppModal from '@components/common/Appmodal';
import CustomButton from '@components/common/CustomButton';

export default function ContactsComponent({modalVisible, setModalVisible}) {
  return (
    <View>
      <AppModal
        title="My Profile"
        modalBody={<View></View>}
        modalFooter={<></>}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <CustomButton
        title="Open Modal"
        secondary
        onPress={() => {
          setModalVisible(true);
        }}
      />
    </View>
  );
}
