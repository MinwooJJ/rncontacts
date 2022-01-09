import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';

function LogIn() {
  return (
    <View>
      <Text>LogIn</Text>
    </View>
  );
}
function SignUp() {
  return (
    <View>
      <Text>SignUp</Text>
    </View>
  );
}

const AuthStack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator initialRouteName="LogIn">
      <AuthStack.Screen name="LogIn" component={LogIn} />
      <AuthStack.Screen name="Register" component={SignUp} />
    </AuthStack.Navigator>
  );
}
