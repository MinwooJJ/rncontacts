import React, {useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import {GlobalContext} from '@context/Provider';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import {navigationRef} from './SideMenu/RooteNavigator';
export default function AppNavContainer() {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);
  // AsyncStorage control value
  // isLoggedIn을 초기 값으로 주어 global state값도 control
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = useState(false);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');

      if (user) {
        setAuthLoaded(true);
        setIsAuthenticated(true);
      } else {
        setAuthLoaded(true);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log('AsyncStorage error: ', error);
    }
  };

  // isAuthenticated 값을 변경하기 위한 isLoggedin dependency
  useEffect(() => {
    getUser();
  }, [isLoggedIn]);

  return (
    <>
      {authLoaded ? (
        <NavigationContainer ref={navigationRef}>
          {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
}
