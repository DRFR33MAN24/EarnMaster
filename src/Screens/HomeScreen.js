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
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import * as Progress from 'react-native-progress';

export const HomeScreen = ({navigation}) => {
  // const navigateDetails = () => {
  //   navigation.navigate('Details');
  // };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider />

      <ScrollView style={{flex: 1}}>
        <Card
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 20,
            marginHorizontal: 5,
            marginVertical: 10,
            borderWidth: 2,

            borderRadius: 20,
          }}>
          <Text style={[{fontSize: 20}, styles.textWithShadow]}>Lv #1</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              <Progress.Bar
                progress={0.3}
                width={200}
                height={15}
                style={styles.progressBarShadow}
              />
            </View>
            <Image
              source={require('./images/gift.png')}
              style={styles.acheivementImage}
            />
          </View>
        </Card>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          <Card style={styles.homeScreenButton}>
            <View>
              <Image
                source={require('./images/offer.jpg')}
                style={styles.homeScreenButtonImage}
              />

              <TouchableOpacity>
                <Text numberOfLines={1} style={{flex: 1}}>
                  Watch Ads
                </Text>
              </TouchableOpacity>
            </View>
          </Card>

          <Card style={styles.homeScreenButton}>
            <View>
              <Image
                source={require('./images/watch.jpg')}
                style={styles.homeScreenButtonImage}
              />
              <TouchableOpacity>
                <Text numberOfLines={1} style={{flex: 1}}>
                  Watch Ads
                </Text>
              </TouchableOpacity>
            </View>
          </Card>

          <Card style={styles.homeScreenButton}>
            <View>
              <Image
                source={require('./images/gamble.png')}
                style={styles.homeScreenButtonImage}
              />
              <TouchableOpacity>
                <Text numberOfLines={1} style={{flex: 1}}>
                  Watch Ads
                </Text>
              </TouchableOpacity>
            </View>
          </Card>

          <Card style={styles.homeScreenButton}>
            <View>
              <Image
                source={require('./images/history.png')}
                style={styles.homeScreenButtonImage}
              />
              <TouchableOpacity>
                <Text numberOfLines={1} style={{flex: 1}}>
                  Watch Ads
                </Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeScreenButton: {
    margin: 4,
  },
  homeScreenButtonImage: {
    width: 96,
    height: 96,
    resizeMode: 'stretch',
  },
  acheivementImage: {
    width: 64,
    height: 64,
    resizeMode: 'stretch',
  },
  textWithShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  progressBarShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
