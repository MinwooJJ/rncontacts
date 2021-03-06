import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Contacts from '@screens/Contacts';
import ContactDetail from '@screens/ContactDetail';
import CreateContact from '@screens/CreateContact';
import Settings from '@screens/Settings';
import {
  CONTACT_LIST,
  CONTACT_DETAIL,
  CREATE_CONTACT,
  SETTINGS,
  LOGOUT,
} from '@constants/routeNames';
import LogOut from '@screens/LogOut';

const HomeStack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
      <HomeStack.Screen name={LOGOUT} component={LogOut} />
    </HomeStack.Navigator>
  );
}
