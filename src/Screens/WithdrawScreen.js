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
import {BackIcon} from '../Components/NavigationComponents';

const playCard = {
  backgroundColor: 'white',
  image: require('./images/play.png'),
  title: 'Google Play',
  value: '5$',
};
const playstationCard = {
  backgroundColor: 'grey',
  image: require('./images/playstation.png'),
  title: 'Google Play',
  value: '5$',
};
const amazonCard = {
  backgroundColor: 'orange',
  image: require('./images/amazon.png'),
  title: ' Amazon Gift Card',
  value: '5$',
};
const RedeemOption = ({style}) => {
  return (
    <View
      style={{
        width: '50%',
        height: 120,

        // backgroundColor: 'pink',

        margin: 0,
        padding: 0,
      }}>
      <View
        style={{
          // backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 2,
          padding: 5,

          height: 110,
          width: '99%',
        }}>
        <View
          style={{
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            width: '99%',
            height: 100,
            borderRadius: 15,
            backgroundColor: style.backgroundColor,
            zIndex: -200,
          }}>
          <Image
            source={style.image}
            style={{resizeMode: 'center', width: 64, height: 64}}
          />
        </View>
        <View style={styles.glassyBackground}>
          <Image
            source={require('./images/glass.png')}
            style={{
              resizeMode: 'cover',
              height: '100%',
              width: '100%',
              borderRadius: 15,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '95%',
            height: 100,
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text>{style.title}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text>{style.value}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export const WithdrawScreen = ({navigation}) => {
  // const navigateDetails = () => {
  //   navigation.navigate('Details');
  // };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title="Withdraw"
        accessoryLeft={<BackIcon navigation={navigation} />}
      />
      <Divider />
      <View>
        <Text>Choose your withdrawal method:</Text>
      </View>

      <ScrollView style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            // flex: 1,
            padding: 10,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <RedeemOption style={playCard} />
          <RedeemOption style={playCard} />
          <RedeemOption style={playstationCard} />
          <RedeemOption style={playstationCard} />
          <RedeemOption style={amazonCard} />
          <RedeemOption style={amazonCard} />
          {/* <RedeemOption />
          <RedeemOption /> */}
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

    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#0E317A',
    width: '99%',
    height: 100,
    zIndex: -100,
    opacity: 0.5,
  },
});
