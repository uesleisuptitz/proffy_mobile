import React from 'react';
import {StatusBar} from 'react-native';
import {COLORS} from './src/assets';
import AppStack from './src/navigation/app-stack';
const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <AppStack />
    </>
  );
};

export default App;
