import {
  Layout,
  Text,
  Button,
  Divider,
  TopNavigation,
  Card,
} from '@ui-kitten/components';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Image,
} from 'react-native';

const RedeemOption = props => {
  return (
    <View style={{flex: 1}}>
      <Card style={{margin: 4}}>
        {/* <View style={{ position: 'absolute', backgroundColor: 'pink', width: '150%', height: '150%', zIndex: -200 }}>

                </View> */}
        <View style={styles.glassyBackground}>
          <Image
            source={require('./images/glass.png')}
            style={{resizeMode: 'stretch'}}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1, flexWrap: 'wrap'}}>
            Prepaid Visa gift card when pressing this button
          </Text>
        </View>
      </Card>
    </View>
  );
};
export const WithdrawScreen = ({navigation}) => {
  // const navigateDetails = () => {
  //   navigation.navigate('Details');
  // };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider />
      <View>
        <Text>Choose your withdrawal method:</Text>
      </View>
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: Dimensions.get('window').width,
          }}>
          <RedeemOption />
          <RedeemOption />
          <RedeemOption />
          <RedeemOption />
          <RedeemOption />
          <RedeemOption />
          <RedeemOption />
          <RedeemOption />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  starIcon: {
    color: 'gold',

    shadowColor: 'gold',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  glassyBackground: {
    position: 'absolute',
    backgroundColor: '#0E317A',
    width: '150%',
    height: '150%',
    zIndex: -100,
    opacity: 0.5,
  },
});
