import React, {useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import {Splash} from '../components/Splash';
import {Login} from '../../screens/guest/Login';

const AppNavigation = () => {
  const [showSplash, setShowSplash] = useState(true);

  setTimeout(() => {
    // setShowSplash(false);
  }, 4200);

  return (
    <NavigationContainer>
      {/* {showSplash ? <Splash /> : <StackNavigation />} */}
      {showSplash ? <Login /> : <StackNavigation />}
    </NavigationContainer>
  );
};
export default AppNavigation;
