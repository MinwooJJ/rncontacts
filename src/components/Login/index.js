import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Container from '@components/common/Container';
import Input from '@components/common/Input';
import CustomButton from '@components/common/CustomButton';
import Message from '@components/common/Message';
import styles from './styles';
import {REGISTER} from '@constants/routeNames';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const {navigate} = useNavigation();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

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
        <Message
          retry
          retryFn={() => {
            console.log('retry');
          }}
          primary
          onDismiss={() => {}}
          message="invalid credentials"
        />
        <Message onDismiss={() => {}} danger message="invalid credentials" />
        <Message onDismiss={() => {}} info message="invalid credentials" />
        <Message onDismiss={() => {}} success message="invalid credentials" />
        <View style={styles.form}>
          <Input
            label="Username"
            onChangeText={text => setName(text)}
            value={name}
            autoCapitalize="none"
            placeholder="Enter Username"
          />
          <Input
            label="Password"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize="none"
            icon={<Text>Show</Text>}
            iconPosition="right"
          />
          <CustomButton primary title="Submit" />
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
