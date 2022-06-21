import React from 'react';

import {Image, StyleSheet, View} from 'react-native';
import {Layout, Text, useTheme} from '@ui-kitten/components';
const SplashScreen = props => {
  const splash = './images/logo.png';
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme['background-basic-color-1']},
      ]}>
      <Image source={require(splash)} style={styles.imageStyle} />
      <Text style={styles.splashText}>Earn Master v1.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  imageStyle: {
    width: 128,
    height: 128,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
  },
});

export default SplashScreen;
