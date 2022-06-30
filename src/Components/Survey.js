import React, {useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {Divider, Card, Text} from '@ui-kitten/components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClock, faS, faStar} from '@fortawesome/free-solid-svg-icons';
import {ThemeContext} from '../../theme-context';
import {glass} from '../Constants/images';
export const Survey = ({data}) => {
  let theme = useContext(ThemeContext).currentTheme;
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
            // backgroundColor: 'red',
            zIndex: -200,
          }}>
          <Image
            source={data.imageUri}
            style={{resizeMode: 'center', width: 64, height: 64}}
          />
        </View>
        <View style={styles.glassyBackground}>
          <Image
            source={glass}
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
            top: 4,
            right: 4,
            zIndex: 300,
          }}>
          <FontAwesomeIcon icon={faStar} size={20} style={styles.starIcon} />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 4,
            left: 4,
            zIndex: 300,
            flexDirection: 'row',
          }}>
          <FontAwesomeIcon icon={faClock} size={20} />
          <Text>{data.timeToComplete}</Text>
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
            <Text>{data.name}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 2,
            }}>
            {/* <View
              style={{
                // flexDirection: 'row',
                // flex: 1,
                // justifyContent: 'flex-end',
                // backgroundColor: 'red',
                padding: 5,
              }}>
              <Text>{data.details}</Text>
            </View> */}
            {/* <View
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
                icon={faClock}
                size={10}
                // style={{color: props.style.tintColor}}
              />
              <Text style={{fontSize: 12}}> 500</Text>
            </View> */}
          </View>
        </View>
      </View>
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
});
