import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import {default as theme} from './src/theme.json';
import {AppNavigator} from './src/Screens/Navigator';

export default () => (
  <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
    <AppNavigator />
  </ApplicationProvider>
);
