import React, { useState, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
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
import { StyleSheet, View } from 'react-native';
import { NotificationScreen } from './NotificationScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faBell,
  faHome,
  faWallet,
  faCoins,
} from '@fortawesome/free-solid-svg-icons';
import { SurveysScreen } from './SurveysScreen';

const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const homeIcon = props => (
  <FontAwesomeIcon {...props} icon={faHome} size={25} />
);

const walletIcon = props => (
  <FontAwesomeIcon {...props} icon={faWallet} size={25} />
);

const HomeScreenTopBar = () => {
  let navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          paddingHorizontal: 4,
        }}>
        <Button
          appearance="ghost"
          onPress={() => navigation.navigate('Notification')}
          style={{ padding: 0 }}>
          <View style={styles.badgeIconView}>
            <Text style={styles.badge}> 2 </Text>

            <FontAwesomeIcon icon={faBell} size={25} style={{ color: 'gold' }} />
          </View>
        </Button>
      </View>
      <View
        style={{
          paddingHorizontal: 4,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          {/* <Text style={styles.badge}> 2 </Text> */}

          <FontAwesomeIcon icon={faCoins} size={25} style={{ color: 'gold' }} />
          <Text> 100</Text>
        </View>
      </View>
    </View>
  );
};
const WalletScreenTopBar = () => {
  let navigation = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal: 4,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          paddingHorizontal: 2,
        }}>
        {/* <Text style={styles.badge}> 2 </Text> */}

        <FontAwesomeIcon icon={faCoins} size={25} style={{ color: 'gold' }} />
        <Text> 100</Text>
      </View>
    </View>
  );
};
const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Home" icon={homeIcon} />
    <BottomNavigationTab title="Wallet" icon={walletIcon} />
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
    <Stack.Screen name="Surveys" component={SurveysScreen} />
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
      options={{
        headerRight: props => <WalletScreenTopBar {...props} />,
      }}
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
  badgeIconView: {
    position: 'relative',
    padding: 5,
  },
  badge: {
    color: '#fff',
    position: 'absolute',
    zIndex: 10,
    top: 1,
    right: 1,
    padding: 1,
    backgroundColor: 'red',
    borderRadius: 5,
    fontSize: 10,
  },
});
