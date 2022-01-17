import React, {useState} from 'react';
import Container from '@components/common/Container';
import Input from '@components/common/Input';
import CustomButton from '@components/common/CustomButton';
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

      <CustomButton secondary title="Submit" loading={true} disabled={true} />
      <CustomButton secondary title="Click Me" loading={true} />
      <CustomButton primary title="Submit" loading={true} disabled={true} />
      <CustomButton danger title="Submit" />
    </Container>
  );
}
