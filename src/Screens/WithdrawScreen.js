import {
  Layout,
  Text,
  Button,
  Divider,
  TopNavigation,
  Card,
  useTheme,
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
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faC, faCoins} from '@fortawesome/free-solid-svg-icons';
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
        maxWidth: 200,

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
            // justifyContent: 'flex-start',
            // alignItems: 'flex-start',
            width: '95%',
            height: 100,
            // backgroundColor: 'blue',
          }}>
          <View
            style={{
              // flexDirection: 'row',
              flex: 1,
              justifyContent: 'flex-start',
              // backgroundColor: 'red',
              padding: 5,
            }}>
            <Text>{style.title}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 2,
            }}>
            <View
              style={{
                // flexDirection: 'row',
                // flex: 1,
                // justifyContent: 'flex-end',
                // backgroundColor: 'red',
                padding: 5,
              }}>
              <Text>{style.value}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                // flex: 1,
                // justifyContent: 'flex-end',
                backgroundColor: 'gold',
                borderRadius: 10,
                padding: 5,
              }}>
              <FontAwesomeIcon
                icon={faCoins}
                size={10}
                // style={{color: props.style.tintColor}}
              />
              <Text style={{fontSize: 12}}> 500</Text>
            </View>
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
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: theme['background-basic-color-4']}}>
      <TopNavigation
        title="Withdraw"
        accessoryLeft={<BackIcon navigation={navigation} />}
      />
      <Divider />
      <Card>
        <Text>Choose your withdrawal method:</Text>
      </Card>

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
