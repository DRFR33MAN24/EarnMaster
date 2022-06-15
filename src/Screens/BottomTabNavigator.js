import React, {useState, useEffect} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
import {HomeScreen} from './HomeScreen';
import {WalletScreen} from './WalletScreen';
//import { StockScreen } from './StockScreen';
import {StyleSheet, View} from 'react-native';
import {NotificationScreen} from './NotificationScreen';
const {Navigator, Screen} = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeScreenTopBar = () => {
  let navigation = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal: 4,
      }}>
      <Button onPress={() => navigation.navigate('Notification')}>Bell</Button>
    </View>
  );
};
const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Home" />
    <BottomNavigationTab title="Wallet" />
  </BottomNavigation>
);

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Dashboard"
      component={HomeScreen}
      options={{
        headerRight: props => <HomeScreenTopBar {...props} />,
      }}
    />
    <Stack.Screen name="Notification" component={NotificationScreen} />
  </Stack.Navigator>
);
const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen
      name="HomeTab"
      component={StackNavigator}
      options={{
        headerShown: false,
      }}
    />
    <Screen
      name="Wallet"
      // options={{headerRight: props => <HomeScreenTopBar {...props} />}}
      component={WalletScreen}
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
