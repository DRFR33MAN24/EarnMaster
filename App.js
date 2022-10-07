import React, {useEffect, useState} from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import {default as light} from './src/light.json';
import {default as dark} from './src/dark.json';
import {default as mapping} from './mapping.json';
import {ThemeContext} from './theme-context';
import {AppNavigator} from './src/Screens/Navigator';
import SplashScreen from './src/Screens/SplashScreen';

import {Provider} from 'react-redux';
import store from './src/store';
import {SafeAreaView} from 'react-native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'localhost:5000/graphql',
  cache: new InMemoryCache(),
});

export default () => {
  const [currentTheme, setTheme] = useState('light');
  const [appReady, setAppReady] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAppReady(true);
    }, 2000);
  }, []);

  const toggleTheme = () => {
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ThemeContext.Provider value={{currentTheme, toggleTheme}}>
          <ApplicationProvider
            {...eva}
            theme={
              currentTheme === 'light'
                ? {...eva[currentTheme], ...light}
                : {...eva[currentTheme], ...dark}
            }
            customMapping={mapping}>
            {appReady ? <AppNavigator /> : <SplashScreen />}
          </ApplicationProvider>
        </ThemeContext.Provider>
      </ApolloProvider>
    </Provider>
  );
};
