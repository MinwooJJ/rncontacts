import React from 'react';
import Container from '@components/common/Container';
import {SafeAreaView, Image, TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';
import {SETTINGS} from '@constants/routeNames';
export default function SideMenu({navigation}) {
  const menuItems = [
    {
      icon: <Text>T</Text>,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {icon: <Text>T</Text>, name: 'Logout', onPress: () => {}},
  ];

  return (
    <SafeAreaView>
      <Container>
        <Image
          source={require('@assets/images/logo.png')}
          height={70}
          width={70}
          style={styles.logoImage}
        />
        <View style={{paddingHorizontal: 70}}>
          {menuItems.map(({name, icon, onPress}) => {
            <TouchableOpacity key={name} style={styles.item} onPress={onPress}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>;
          })}
        </View>
      </Container>
    </SafeAreaView>
  );
}
