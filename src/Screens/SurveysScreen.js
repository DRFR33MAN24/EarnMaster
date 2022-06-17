import {SafeAreaView, ScrollView, View, Image, Dimensions} from 'react-native';
import {Divider, Card, Text} from '@ui-kitten/components';

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
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: Dimensions.get('window').width,
          }}>
          <Survey />
          <Survey />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
