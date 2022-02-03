import React from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import AppModal from '@components/common/Appmodal';
import CustomButton from '@components/common/CustomButton';
import Message from '@components/common/Message';
import colors from '@assets/theme/colors';
import Icon from '@common/Icon';
import styles from './styles';

export default function ContactsComponent({
  modalVisible,
  setModalVisible,
  data,
  loading,
}) {
  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
        <Message info message="No contacts to show" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    const {contact_picture, first_name, last_name, phone_number} = item;

    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          {contact_picture ? (
            <Image
              style={{width: 45, height: 45, borderRadius: 100}}
              source={{uri: contact_picture}}
            />
          ) : (
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: colors.grey,
              }}
            />
          )}
          <View style={{flexDirection: 'row'}}>
            <Text>{first_name}</Text>
            <Text>{last_name}</Text>
          </View>
          <Text>{phone_number}</Text>
        </View>
        <Icon name="right" type="antDesign" />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <AppModal
        title="My Profile"
        modalBody={<View></View>}
        modalFooter={<></>}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      {loading && (
        <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}

      {!loading && (
        <View style={{paddingVertical: 20}}>
          <FlatList
            renderItem={renderItem}
            data={data}
            ListEmptyComponent={ListEmptyComponent}
            ListFooterComponent={<View style={{height: 150}} />}
            keyExtractor={item => String(item.id)}
          />
        </View>
      )}

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
