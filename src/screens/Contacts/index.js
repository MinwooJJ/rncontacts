import React, {useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Container from '@components/common/Container';
import {useNavigation} from '@react-navigation/native';
import Icon from '@components/common/Icon';

export default function Contacts() {
  // Navigation 컴포넌트가 아닌 직접 사용하는 스크린 컴포넌트에서 설정 가능
  const {setOptions, toggleDrawer} = useNavigation();
  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Icon type="material" size={25} name="menu" style={{padding: 10}} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <Container>
      <Text>Contact</Text>
    </Container>
  );
}
