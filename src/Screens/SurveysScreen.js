import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View, Image, Dimensions} from 'react-native';
import {
  Divider,
  Card,
  Text,
  TopNavigation,
  useTheme,
} from '@ui-kitten/components';
import {Survey, WideSurvey} from '../Components/Survey';
import {BackIcon} from '../Components/NavigationComponents';

import {surveysData} from '../fakeJsonData';
export const SurveysScreen = ({navigation}) => {
  // const navigateDetails = () => {
  //   navigation.navigate('Details');
  // };
  const theme = useTheme();
  const [surveys, setSurveys] = useState([]);
  useEffect(() => {
    // api call
    setSurveys(surveysData);
    //console.log(surveyData);
  }, []);
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: theme['background-basic-color-4']}}>
      <TopNavigation
        title="Surveys"
        accessoryLeft={<BackIcon navigation={navigation} />}
      />
      <Divider />

      <ScrollView style={{flex: 1}}>
        {surveys != null && surveys.map(survey => <WideSurvey data={survey} />)}
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            // flex: 1,

            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          {surveys != null && surveys.map(survey => <Survey data={survey} />)}
          {/* <Survey />
          <Survey /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
