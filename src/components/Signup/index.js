import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Container from '@components/common/Container';
import Input from '@components/common/Input';
import CustomButton from '@components/common/CustomButton';
import styles from './styles';
import {LOGIN} from '@constants/routeNames';
import {useNavigation} from '@react-navigation/native';
import Message from '@components/common/Message';
import colors from '@assets/theme/colors';

export default function Signup({onSubmit, onChange, errors, error, loading}) {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Image
        source={require('@assets/images/logo.png')}
        height={70}
        width={70}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcom to Contacts</Text>
        <Text style={styles.subTitle}>Create an account</Text>
        <View style={styles.form}>
          {error?.error && (
            <Message
              retry
              retryFn={() => {
                console.log('retry');
              }}
              danger
              onDismiss={() => {}}
              message={error?.error}
            />
          )}
          <Input
            label="User Name"
            autoCapitalize="none"
            placeholder="Enter User Name"
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
            error={errors.userName || error?.username?.[0]}
          />
          <Input
            label="First Name"
            autoCapitalize="none"
            placeholder="Enter First Name"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName || error?.first_name?.[0]}
          />
          <Input
            label="Last Name"
            autoCapitalize="none"
            placeholder="Enter Last Name"
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
            error={errors.lastName || error?.last_name?.[0]}
          />
          <Input
            label="Email"
            autoCapitalize="none"
            placeholder="Enter Email"
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            error={errors.email || error?.email?.[0]}
          />
          <Input
            label="Password"
            secureTextEntry={true}
            placeholder="Enter Password"
            autoCapitalize="none"
            icon={<Text>Show</Text>}
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={errors.password || error?.password?.[0]}
          />
          <CustomButton
            primary
            title="Submit"
            onPress={onSubmit}
            loading={loading}
            disabled={loading}
          />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
}
