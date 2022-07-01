import React, { useContext, useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Dimensions,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { Divider, Card, Text } from '@ui-kitten/components';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClock, faS, faStar } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../theme-context';
import { glass, dollar } from '../Constants/images';
import { GoToSurveyModal } from './GoToSurveyModal';

export const Survey = ({ data }) => {
  const width = new Animated.Value(1);
  const height = new Animated.Value(1);

  const [surveyDetails, toggleSurveyDetails] = useState(false);

  let theme = useContext(ThemeContext).currentTheme;
  let rate = Math.round(data.coins / 100);
  if (rate > 5) {
    rate = 5;
  }
  useEffect(() => {
    if (data.animated) {
      Animated.loop(
        Animated.spring(width, {
          toValue: 1.2,
          duration: 10000,

          friction: 0.5,
          useNativeDriver: false,
        }),
      ).start();
    }
  }, []);
  return (
    <View
      style={{
        width: '50%',
        // height: 120,
        maxWidth: 200,

        // backgroundColor: 'pink',
        margin: 0,
        padding: 0,
      }}>
      {surveyDetails ? <GoToSurveyModal data={data} closeModal={toggleSurveyDetails} /> : null}

      <TouchableOpacity
        onPress={() => toggleSurveyDetails(true)}
        style={[
          styles.cardShadow,
          {
            borderRadius: 10,
            backgroundColor: 'white',
            margin: 4
          }
        ]
        }>


        <View
          style={{
            // backgroundColor: 'yellow',

            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
            padding: 0,

            height: 110,
            width: '100%',
          }}>
          <View
            style={{
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: 110,

              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              backgroundColor: 'grey',
              zIndex: -200,
              overflow: 'hidden',
            }}>
            <Animated.Image
              source={data.imageUri}
              style={{
                resizeMode: 'cover',
                // width: width,
                // height: height,
                width: '100%',
                height: '100%',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,

                transform: [{ scale: width }],
              }}
            />
          </View>
          {/* <View style={styles.glassyBackground}>
          <Image
            source={glass}
            style={{
              resizeMode: 'stretch',
              height: '100%',
              width: '100%',
              borderRadius: 10,
              zIndex: -100,
            }}
          />
        </View> */}
          <View
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              zIndex: 300,
            }}>
            <View style={{ flexDirection: 'row' }}>
              {[...Array(rate)].map((e, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  size={20}
                  style={styles.starIcon}
                />
              ))}
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 10,
              left: 10,
              zIndex: 300,
              flexDirection: 'row',
            }}>
            <FontAwesomeIcon
              icon={faClock}
              size={20}
              style={{ color: theme === 'light' ? 'white' : 'black' }}
            />
            <Text
              style={{
                color: theme === 'light' ? 'white' : 'black',
                paddingHorizontal: 4,
              }}>
              {data.timeToComplete}
            </Text>
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
              {/* <Text>{data.details}</Text> */}
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Text>{data.name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>{data.coins}</Text>
            <Image
              source={dollar}
              style={{ width: 16, height: 16, opacity: 1, resizeMode: 'stretch', marginHorizontal: 5 }}
            />

          </View>

        </View>
      </TouchableOpacity>
    </View>
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
  cardShadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: 1.0,

    elevation: 4,
  }
});
