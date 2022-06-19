import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import {default as light} from './src/light.json';
import {default as dark} from './src/dark.json';
import {default as mapping} from './mapping.json';
import {ThemeContext} from './theme-context';
import {AppNavigator} from './src/Screens/Navigator';

export default () => {
  const [currentTheme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };
  return (
    <ThemeContext.Provider value={{currentTheme, toggleTheme}}>
      <ApplicationProvider
        {...eva}
        theme={
          currentTheme === 'light'
            ? {...eva[currentTheme], ...light}
            : {...eva[currentTheme], ...dark}
        }
        customMapping={mapping}>
        <AppNavigator />
      </ApplicationProvider>
    </ThemeContext.Provider>
  );
};
