import React from 'react';
import styles from './styles';
import {View, Image, Text} from 'react-native';
import Container from '@components/common/Container';
import Input from '@components/common/Input';
import CustomButton from '@components/common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '@constants/general';
export default function CreateContactComponent() {
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
        <Input label="First Name" placeholder="Enter First Name" />
        <Input label="Last Name" placeholder="Enter Last Name" />
        <Input
          icon={
            <CountryPicker
              withFilter
              withFlag
              withCountryNameButton={false}
              withCallingCode
              withEmoji
              onSelect={() => {}}
            />
          }
          style={{paddingLeft: 10}}
          iconPosition="left"
          label="Phone Number"
          placeholder="Enter Phone Number"
        />
        <CustomButton primary title="Submit" />
      </Container>
    </View>
  );
}
