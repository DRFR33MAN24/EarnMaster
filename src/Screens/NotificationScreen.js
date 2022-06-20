import {
  Layout,
  Text,
  Button,
  Divider,
  TopNavigation,
} from '@ui-kitten/components';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {BackIcon} from '../Components/NavigationComponents';
export const NotificationScreen = ({navigation}) => {
  // const navigateDetails = () => {
  //   navigation.navigate('Details');
  // };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title="Notification"
        accessoryLeft={<BackIcon navigation={navigation} />}
      />
      <Divider />

      <ScrollView style={{flex: 1}}></ScrollView>
    </SafeAreaView>
  );
};
