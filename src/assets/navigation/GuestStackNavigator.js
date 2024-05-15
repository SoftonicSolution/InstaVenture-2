import React from 'react';
import {Splash} from '../components/Splash';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const GuestStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
