import React from 'react';
import styles from './styles';
import {View, Image, Text, Switch, TouchableOpacity} from 'react-native';
import Container from '@components/common/Container';
import Input from '@components/common/Input';
import CustomButton from '@components/common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '@constants/general';
import colors from '@assets/theme/colors';
import ImagePicker from '../common/ImagePicker';

export default function CreateContactComponent({
  onChangeText,
  setForm,
  onSubmit,
  form,
  loading,
  toggleValueChange,
  error,
  sheetRef,
  openSheet,
  onFileSelected,
  localFile,
}) {
  return (
    <View style={styles.container}>
      <Container>
        <Image
          width={150}
          height={150}
          source={{uri: localFile?.path || localFile || DEFAULT_IMAGE_URI}}
          style={styles.imageView}
        />
        <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseText}>Choose Image</Text>
        </TouchableOpacity>
        <Input
          onChangeText={value => {
            onChangeText({name: 'firstName', value: value});
          }}
          label="First Name"
          value={form.firstName || ''}
          placeholder="Enter First Name"
          error={error?.first_name?.[0]}
        />
        <Input
          onChangeText={value => {
            onChangeText({name: 'lastName', value: value});
          }}
          label="Last Name"
          value={form.lastName || ''}
          placeholder="Enter Last Name"
          error={error?.last_name?.[0]}
        />
        <Input
          icon={
            <CountryPicker
              countryCode={form.countryCode || undefined}
              withFilter
              withFlag
              withCountryNameButton={false}
              withCallingCode
              withCallingCodeButton
              withEmoji
              onSelect={data => {
                const phoneCode = data.callingCode[0];
                const cCode = data.cca2;
                setForm({...form, phoneCode, countryCode: cCode});
              }}
            />
          }
          style={{paddingLeft: 10}}
          iconPosition="left"
          label="Phone Number"
          value={form.phoneNumber || ''}
          placeholder="Enter Phone Number"
          error={error?.phone_number?.[0]}
          onChangeText={value => {
            onChangeText({name: 'phoneNumber', value: value});
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 17}}>Add to favoriates</Text>
          <Switch
            trackColor={{false: 'blue', true: colors.primary}}
            thumbColor="#FFFFFF"
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleValueChange}
            value={form.isFavoriate}
          />
        </View>
        <CustomButton
          loading={loading}
          disable={loading}
          onPress={onSubmit}
          primary
          title="Submit"
        />
      </Container>
      <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
    </View>
  );
}
