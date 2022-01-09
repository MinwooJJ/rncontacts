import React from 'react';
import AppNavContainer from '@navigations';
import GlobalProvider from '@context/Provider';

export default function App() {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
}
