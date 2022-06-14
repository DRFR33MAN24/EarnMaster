import {
  Layout,
  Text,
  Button,
  Divider,
  TopNavigation,
} from '@ui-kitten/components';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

export const HomeScreen = ({navigation}) => {
  // const navigateDetails = () => {
  //   navigation.navigate('Details');
  // };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider />

      <ScrollView style={{flex: 1}}>
        <View
          style={{
            padding: 20,
            margin: 20,
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignContent: 'center',
          }}>
          <Button>Watch Ads</Button>
          <Button>Complete offers</Button>
          <Button>Gamble</Button>
          <Button>Gamble</Button>
          <Button>Gamble</Button>
          <Button>Gamble</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
