import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATOR} from '@constants/routeNames';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </Drawer.Navigator>
  );
}
