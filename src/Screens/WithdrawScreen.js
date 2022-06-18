import {
  Layout,
  Text,
  Button,
  Divider,
  TopNavigation,
} from '@ui-kitten/components';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

export const WithdrawScreen = ({navigation}) => {
  // const navigateDetails = () => {
  //   navigation.navigate('Details');
  // };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider />

      <ScrollView style={{flex: 1}}></ScrollView>
    </SafeAreaView>
  );
};
