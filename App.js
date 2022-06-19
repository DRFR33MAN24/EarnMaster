import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import {default as theme} from './src/theme.json';
import {default as mapping} from './mapping.json';
import {ThemeContext} from './theme-context';
import {AppNavigator} from './src/Screens/Navigator';

export default () => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <ApplicationProvider {...eva} theme={eva[theme]} customMapping={mapping}>
        <AppNavigator />
      </ApplicationProvider>
    </ThemeContext.Provider>
  );
};
