import React, {useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import {Splash} from '../components/Splash';

const AppNavigation = () => {
  const [showSplash, setShowSplash] = useState(true);

  setTimeout(() => {
    setShowSplash(false);
  }, 4200);

  return (
    <NavigationContainer>
      {showSplash ? <Splash /> : <StackNavigation />}
    </NavigationContainer>
  );
};
export default AppNavigation;
