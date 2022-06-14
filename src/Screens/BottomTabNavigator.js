import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  BottomNavigation,
  BottomNavigationTab,
  Button,
  Icon,
  Layout,
  Modal,
  Card,
  Text,
} from '@ui-kitten/components';
import { HomeScreen } from './HomeScreen';
import { WalletScreen } from './WalletScreen';
//import { StockScreen } from './StockScreen';
import { StyleSheet } from 'react-native';
const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Home" />
    <BottomNavigationTab title="Wallet" />
  </BottomNavigation>
);

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="WalletScreen" component={WalletScreen} />
    {/* <Stack.Screen name="Stock" component={StockScreen} /> */}
  </Stack.Navigator>
);
const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen
      name="Home"
      // options={{ headerTitle: props => <LogoTitle {...props} /> }}
      component={HomeScreen}
    />
    <Screen
      name="Settings"
      component={StackNavigator}
      options={{ headerShown: false }}
    />
    {/* <Screen name="Settings" component={SettingsScreen} /> */}
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
