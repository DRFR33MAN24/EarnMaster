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
  backgroundColor: 'black',
  image: require('./images/playstation.png'),
  title: 'Google Play',
  value: '5$',
};
const RedeemOption = ({style}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        flexBasis: '50%',
        maxWidth: '50%',
        height: 100,
        padding: 4,
      }}>
      <View
        style={{
          flex: 1,

          margin: 4,

          // backgroundColor: 'yellow',
          borderRadius: 2,
        }}>
        <View
          style={{
            flex: 1,

            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 100,

            backgroundColor: style.backgroundColor,
            zIndex: -200,
          }}>
          <View style={{backgroundColor: 'red'}}>
            <Image
              source={style.image}
              style={{resizeMode: 'center', width: 64, height: 64}}
            />
          </View>
        </View>
        <View style={styles.glassyBackground}>
          <Image
            source={require('./images/glass.png')}
            style={{resizeMode: 'cover'}}
          />
        </View>
        <View
          style={{
            flex: 1,
            marginVertical: 2,
            justifyContent: 'center',
            alignItems: 'flex-start',
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
            flex: 1,

            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <RedeemOption style={playCard} />
          <RedeemOption style={playCard} />
          <RedeemOption style={playstationCard} />
          <RedeemOption style={playstationCard} />
          <RedeemOption style={playstationCard} />
          <RedeemOption style={playstationCard} />
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
    margin: 0,
    padding: 0,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#0E317A',
    width: '100%',
    height: 100,
    zIndex: -100,
    opacity: 0.3,
  },
});
