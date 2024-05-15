import {View, Text, Image} from 'react-native';
import React from 'react';
import {DrawerItemList, createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomTabNavigation from './BottomTabNavigation';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Wallet} from '../../screens/guest/Wallet';
import {Profile} from '../../screens/guest/Profile';
import {colors} from '../styles/staticStyle';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: colors.white,
          width: 250,
        },
        headerStyle: {
          backgroundColor: colors.white,
        },
        headerShown: false,
        headerTintColor: colors.black,
        drawerLabelStyle: {
          color: colors.black,
          fontSize: 14,
          marginLeft: -10,
        },
      }}>
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: 'Home',
          title: 'Home',
          headerShadowVisible: false,
          drawerIcon: () => (
            <Icon name="home-outline" size={24} color={colors.black} />
          ),
          drawerItemStyle: {
            backgroundColor: colors.primaryDark,
          },
        }}
        component={BottomTabNavigation}
      />
      <Drawer.Screen
        name="Orders"
        options={{
          drawerLabel: 'Wallet',
          title: 'Orders',
          headerShadowVisible: false,
          drawerIcon: () => (
            <Icon name="gift-outline" size={24} color={colors.black} />
          ),
          drawerItemStyle: {
            backgroundColor: colors.primaryDark,
          },
        }}
        component={Wallet}
      />
      <Drawer.Screen
        name="Search"
        options={{
          drawerLabel: 'Search',
          title: 'Search',
          headerShadowVisible: false,
          drawerIcon: () => (
            <Icon name="search-outline" size={24} color={colors.black} />
          ),
          drawerItemStyle: {
            backgroundColor: colors.primaryDark,
          },
        }}
        component={Profile}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
