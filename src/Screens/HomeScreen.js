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
});
