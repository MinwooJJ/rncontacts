import React, {useContext, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {GlobalContext} from '@context/Provider';
import logoutUser from '@context/actions/auth/logoutUser';

export default function Logout() {
  const {authDispatch} = useContext(GlobalContext);

  useEffect(() => {
    logoutUser()(authDispatch);
  }, []);

  return <ActivityIndicator />;
}
