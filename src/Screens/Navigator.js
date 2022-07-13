import React, {useState, useEffect} from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
//import { StockScreen } from './StockScreen';
import {StyleSheet} from 'react-native';
import {NotificationScreen} from './NotificationScreen';

import {HomeScreen, HomeScreenTopBar, homeIcon} from './HomeScreen';
import {WalletScreen, walletIcon, WalletScreenTopBar} from './WalletScreen';
import {ProfileScreen, profileIcon, ProfileScreenTopBar} from './ProfileScreen';
import {SurveysScreen} from './SurveysScreen';
import {WithdrawScreen} from './WithdrawScreen';
import AuthScreen from './AuthScreen';
import {useDispatch, useSelector} from 'react-redux';
import {loadUser} from '../Reducers/authSlice';

const {Navigator, Screen} = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Home" icon={homeIcon} />
    <BottomNavigationTab title="Wallet" icon={walletIcon} />
    <BottomNavigationTab title="Profile" icon={profileIcon} />
  </BottomNavigation>
);

const StackNavigatorHome = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Dashboard"
      component={HomeScreen}
      options={{
        headerShown: false,
        // headerRight: props => <HomeScreenTopBar {...props} />,
      }}
    />
    <Stack.Screen
      name="Notification"
      component={NotificationScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Surveys"
      component={SurveysScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);
const StackNavigatorWallet = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Wallet"
      component={WalletScreen}
      options={{headerShown: false}}
    />

    <Stack.Screen
      name="Withdraw"
      component={WithdrawScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);
const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen
      name="HomeTab"
      component={StackNavigatorHome}
      options={{
        headerShown: false,
      }}
    />
    <Screen
      name="WalletTab"
      // options={{headerRight: props => <HomeScreenTopBar {...props} />}}
      component={StackNavigatorWallet}
      options={{
        headerShown: false,
        headerRight: props => <WalletScreenTopBar {...props} />,
      }}
    />
    <Screen
      name="Profile"
      // options={{headerRight: props => <HomeScreenTopBar {...props} />}}
      component={ProfileScreen}
      options={{
        headerShown: false,
        headerRight: props => <ProfileScreenTopBar {...props} />,
      }}
    />
    {/* <Screen name="Settings" component={SettingsScreen} /> */}
  </Navigator>
);

export const AppNavigator = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  if (auth.user === undefined) {
    return <></>;
  }
  if (auth.user?.id) {
    return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    );
  }

  return <AuthScreen />;
};

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
