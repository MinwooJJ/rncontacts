import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useContext} from 'react';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATOR} from '@constants/routeNames';
import SideMenu from '@navigations/SideMenu';
import {GlobalContext} from '@context/Provider';

const getDrawerContent = (navigation, authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
};

export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator();
  const {authDispatch} = useContext(GlobalContext);
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={({navigation}) =>
        getDrawerContent(navigation, authDispatch)
      }
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </Drawer.Navigator>
  );
}
