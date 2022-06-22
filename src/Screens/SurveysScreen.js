import React from 'react';
import {SafeAreaView, ScrollView, View, Image, Dimensions} from 'react-native';
import {
  Divider,
  Card,
  Text,
  TopNavigation,
  useTheme,
} from '@ui-kitten/components';
import {Survey} from '../Components/Survey';
import {BackIcon} from '../Components/NavigationComponents';
export const SurveysScreen = ({navigation}) => {
  // const navigateDetails = () => {
  //   navigation.navigate('Details');
  // };
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: theme['background-basic-color-4']}}>
      <TopNavigation
        title="Surveys"
        accessoryLeft={<BackIcon navigation={navigation} />}
      />
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
