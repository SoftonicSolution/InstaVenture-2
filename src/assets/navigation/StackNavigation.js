import React from 'react';
import DrawerNavigation from './DrawerNavigation';
import {NavHeader} from './NavHeader';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <NavHeader isHome={true} />,
        // headerShown: false,
      }}>
      <Stack.Screen name="Main" component={DrawerNavigation} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
