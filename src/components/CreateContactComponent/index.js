import React from 'react';
import styles from './styles';
import {View, Image, Text} from 'react-native';
import Container from '@components/common/Container';
import Input from '@components/common/Input';
import CustomButton from '@components/common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '@constants/general';
export default function CreateContactComponent({
  onChangeText,
  setForm,
  onSubmit,
  form,
  loading,
  error,
}) {
  return (
    <View style={styles.container}>
      <Container>
        <Image
          width={150}
          height={150}
          source={{uri: DEFAULT_IMAGE_URI}}
          style={styles.imageView}
        />
        <Text style={styles.chooseText}>Choose Image</Text>
        <Input
          onChangeText={value => {
            onChangeText({name: 'firstName', value: value});
          }}
          label="First Name"
          placeholder="Enter First Name"
          error={error?.first_name?.[0]}
        />
        <Input
          onChangeText={value => {
            onChangeText({name: 'lastName', value: value});
          }}
          label="Last Name"
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
          placeholder="Enter Phone Number"
          error={error?.phone_number?.[0]}
          onChangeText={value => {
            onChangeText({name: 'phoneNumber', value: value});
          }}
        />
        <CustomButton
          loading={loading}
          disable={loading}
          onPress={onSubmit}
          primary
          title="Submit"
        />
      </Container>
    </View>
  );
}
