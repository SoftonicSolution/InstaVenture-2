import React from 'react';
import {SafeAreaView} from 'react-native';
import {CustomStatusBar} from './src/assets/components/StatusBar';
import AppNavigation from './src/assets/navigation/AppNavigation';
const App = () => {
  return (
    <>
      <CustomStatusBar />
      <SafeAreaView style={{flex: 1}}>
        <AppNavigation />
      </SafeAreaView>
    </>
  );
};
export default App;
