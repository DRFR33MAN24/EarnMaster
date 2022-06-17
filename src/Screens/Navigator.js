import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
//import { StockScreen } from './StockScreen';
import {StyleSheet} from 'react-native';
import {NotificationScreen} from './NotificationScreen';

import {HomeScreen, HomeScreenTopBar, homeIcon} from './HomeScreen';
import {WalletScreen, walletIcon, WalletScreenTopBar} from './WalletScreen';
import {SurveysScreen} from './SurveysScreen';

const {Navigator, Screen} = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabBar = ({navigation, state}) => (
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
      name="WalletTab"
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
