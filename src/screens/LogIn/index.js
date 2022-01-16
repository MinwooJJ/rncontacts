import React, {useState} from 'react';
import Container from '@components/common/Container';
import Input from '@components/common/Input';
import {Text} from 'react-native';

export default function LogIn() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Input
        label={'Username'}
        onChangeText={text => setName(text)}
        value={name}
      />
      <Input
        label={'Password'}
        onChangeText={text => setPassword(text)}
        value={password}
        icon={<Text>HIDE</Text>}
        iconPosition="right"
      />
    </Container>
  );
}
