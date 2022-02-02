import React from 'react';
import Container from '@components/common/Container';
import logoutUser from '@context/actions/auth/logoutUser';
import {
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  View,
  Alert,
} from 'react-native';
import styles from './styles';
import {SETTINGS} from '@constants/routeNames';
import Icon from '@components/common/Icon';

export default function SideMenu({navigation, authDispatch}) {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout!', 'Are you sure you want to logout?', [
      {text: 'Cancel', onPress: () => {}},
      {
        text: 'OK',
        onPress: () => {
          logoutUser()(authDispatch);
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Icon type="fontisto" size={17} name="player-settings" />,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Icon type="material" size={17} name="logout" />,
      name: 'Logout',
      onPress: handleLogout,
    },
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
