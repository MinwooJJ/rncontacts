import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Container from '@components/common/Container';
import Input from '@components/common/Input';
import CustomButton from '@components/common/CustomButton';
import Message from '@components/common/Message';
import styles from './styles';
import {REGISTER} from '@constants/routeNames';
import {useNavigation} from '@react-navigation/native';

export default function Login({
  form,
  error,
  onChange,
  onSubmit,
  loading,
  justSignup,
}) {
  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

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
        <Text style={styles.subTitle}>Please login here</Text>

        <View style={styles.form}>
          {justSignup && (
            <Message
              success
              onDismiss={() => {}}
              message="Account created successfully"
            />
          )}
          {error && !error?.error && (
            <Message
              danger
              onDismiss={() => {}}
              message="Invalid Credentials"
            />
          )}
          {error?.error && (
            <Message
              retry
              retryFn={onSubmit}
              danger
              onDismiss
              message={error?.error}
            />
          )}
          {/* Input의 초기 값을 정해주고 싶은 경우 value 사용 */}
          <Input
            label="Username"
            autoCapitalize="none"
            placeholder="Enter Username"
            value={form.userName || null}
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            autoCapitalize="none"
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry(prev => !prev);
                }}>
                <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
          />
          <CustomButton
            disabled={loading}
            onPress={onSubmit}
            loading={loading}
            primary
            title="Submit"
          />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
}
