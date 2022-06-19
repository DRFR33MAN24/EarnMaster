import React from 'react';
import {SafeAreaView, ScrollView, View, Image, Dimensions} from 'react-native';
import {Divider, Card, Text} from '@ui-kitten/components';
import {Survey} from '../Components/Survey';
export const SurveysScreen = ({navigation}) => {
  // const navigateDetails = () => {
  //   navigation.navigate('Details');
  // };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider />

      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Survey />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            flex: 1,

            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Survey />
          <Survey />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
