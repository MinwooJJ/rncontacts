import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';

function Contacts() {
  return (
    <View>
      <Text>Contact</Text>
    </View>
  );
}
function ContactDetail() {
  return (
    <View>
      <Text>ContactDetail</Text>
    </View>
  );
}
function CreateContact() {
  return (
    <View>
      <Text>CreateContact</Text>
    </View>
  );
}
function Settings() {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="Contacts">
      <HomeStack.Screen name="Contacts" component={Contacts} />
      <HomeStack.Screen name="ContactDetail" component={ContactDetail} />
      <HomeStack.Screen name="CreateContact" component={CreateContact} />
      <HomeStack.Screen name="Settings" component={Settings} />
    </HomeStack.Navigator>
  );
}
