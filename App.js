import React, { useEffect, useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { default as light } from './src/light.json';
import { default as dark } from './src/dark.json';
import { default as mapping } from './mapping.json';
import { ThemeContext } from './theme-context';
import { AppNavigator } from './src/Screens/Navigator';
import SplashScreen from './src/Screens/SplashScreen';
import { Notifications } from 'react-native-notifications';
export default () => {
  const [currentTheme, setTheme] = useState('light');
  const [appReady, setAppReady] = useState(false);

  const sendTokenToServer = async token => {
    try {

      const response = fetch('192.168.1.18:3000/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: token,

        })
      });
      const json = await response.json();
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {

    setTimeout(() => {
      setAppReady(true);
    }, 2000);

    // Request permissions on iOS, refresh token on Android
    Notifications.registerRemoteNotifications();

    Notifications.events().registerRemoteNotificationsRegistered((event) => {
      // TODO: Send the token to my server so it could send back push notifications...
      console.log("Device Token Received", event.deviceToken);
    });
    Notifications.events().registerRemoteNotificationsRegistrationFailed((event) => {
      console.error(event);
    });
  }, []);

  const toggleTheme = () => {
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };
  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <ApplicationProvider
        {...eva}
        theme={
          currentTheme === 'light'
            ? { ...eva[currentTheme], ...light }
            : { ...eva[currentTheme], ...dark }
        }
        customMapping={mapping}>
        {appReady ? <AppNavigator /> : <SplashScreen />}
      </ApplicationProvider>
    </ThemeContext.Provider>
  );
};
