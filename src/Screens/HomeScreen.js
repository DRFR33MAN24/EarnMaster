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
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 20,
            marginHorizontal: 5,
            marginVertical: 10,
            borderWidth: 2,
            borderColor: 'blue',
            borderRadius: 20,
          }}>
          <Text style={{fontSize: 20}}>Lv #1</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              <Progress.Bar progress={0.3} width={200} height={15} />
            </View>
            <Image
              source={require('./images/gift.png')}
              style={styles.acheivementImage}
            />
          </View>
        </View>
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
});
