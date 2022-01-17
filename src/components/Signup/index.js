import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Container from '@components/common/Container';
import Input from '@components/common/Input';
import CustomButton from '@components/common/CustomButton';
import styles from './styles';
import {LOGIN} from '@constants/routeNames';
import {useNavigation} from '@react-navigation/native';

export default function Signup() {
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
        <Text style={styles.subTitle}>Create an account</Text>
        <View style={styles.form}>
          <Input
            label="Username"
            onChangeText={text => setName(text)}
            value={name}
            autoCapitalize="none"
            placeholder="Enter Username"
          />
          <Input
            label="First Name"
            onChangeText={text => setName(text)}
            value={name}
            autoCapitalize="none"
            placeholder="Enter Username"
          />
          <Input
            label="Last Name"
            onChangeText={text => setName(text)}
            value={name}
            autoCapitalize="none"
            placeholder="Enter Username"
          />
          <Input
            label="Email"
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
