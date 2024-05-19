import {View, Text, Image, Platform} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
import {Home} from '../../screens/guest/Home';
import {
  bodyText,
  center,
  colors,
  fontExSmSize,
  fontLgSize,
  fontMdSize,
  fontSize10,
  fontSmSize,
  fontXlLgSize,
} from '../styles/staticStyle';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Profile} from '../../screens/guest/Profile';
import {Wallet} from '../../screens/guest/Wallet';
import HomeStackNavigation from './HomeStackNavigation';
import {Login} from '../../screens/guest/Login';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    // position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    // height: Platform.OS === 'ios' ? 90 : 50,
    height: 50,
    backgroundColor: colors.white,
  },
};

const BottomTabView = ({iconName, label, focused}) => {
  return (
    <>
      <FontAwesome5Icon
        name={iconName}
        resizeMode="contain"
        color={'red'}
        style={{
          fontSize: focused ? fontMdSize.fontSize : fontSmSize.fontSize,
          color: focused ? colors.primaryDark : colors.greyText,
        }}
      />
      <Text
        style={[
          {fontSize: fontSize10.fontSize},
          {color: focused ? colors.primaryDark : colors.greyText},
        ]}>
        {label}
      </Text>
    </>
  );
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="DrawerHome"
        component={HomeStackNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabView iconName="home" label="Home" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabView
              iconName="address-book"
              label="Leader"
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: colors.primaryDark,
                  height: 50,
                  width: 50,
                  top: -20,
                  borderRadius: 100,
                  borderWidth: 2,
                  borderColor: colors.primaryDark,
                }}>
                <FontAwesome5Icon
                  name={'th'}
                  resizeMode="contain"
                  color={'red'}
                  style={{
                    fontSize: focused
                      ? fontMdSize.fontSize
                      : fontSmSize.fontSize,
                    color: colors.white,
                  }}
                />
                <Text
                  style={[
                    {fontSize: fontSize10.fontSize},
                    {color: colors.white},
                  ]}>
                  Sell
                </Text>
              </View>
            );
          },
        }}
      />

      {/* <Tab.Screen
        name="Message"
        component={Wallet}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabView iconName="th" label="Sell" focused={focused} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Wall"
        component={Wallet}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabView
              iconName="user-cog"
              label="For You"
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabView
              iconName="book-reader"
              label="Learn"
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
