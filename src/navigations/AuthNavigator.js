import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LOGIN, REGISTER} from '@constants/routeNames';
import LogIn from '@screens/LogIn';
import SignUp from '@screens/SignUp';

const AuthStack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName="LogIn"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGIN} component={LogIn} />
      <AuthStack.Screen name={REGISTER} component={SignUp} />
    </AuthStack.Navigator>
  );
}
