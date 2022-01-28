import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATOR} from '@constants/routeNames';
import SideMenu from '@navigations/SideMenu';
const Drawer = createDrawerNavigator();

const getDrawerContent = navigation => {
  return <SideMenu navigation={navigation} />;
};

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={({navigation}) => getDrawerContent(navigation)}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </Drawer.Navigator>
  );
}
