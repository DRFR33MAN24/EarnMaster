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
import {faClock, faStar} from '@fortawesome/free-solid-svg-icons';
import {ThemeContext} from '../../theme-context';
import {glass} from '../Constants/images';
export const Survey = ({data}) => {
  let theme = useContext(ThemeContext).currentTheme;
  return (
    <View
      style={{
        width: '50%',
        // minHeight: 200,
        maxWidth: 200,
      }}>
      <Card>
        {/* <View style={{ position: 'absolute', backgroundColor: 'pink', width: '150%', height: '150%', zIndex: -200 }}>

                </View> */}
        <View style={styles.glassyBackground}>
          <Image source={glass} style={{resizeMode: 'stretch'}} />
        </View>
        <View style={{marginTop: 1, marginRight: 2, alignItems: 'flex-end'}}>
          <FontAwesomeIcon icon={faStar} size={25} style={styles.starIcon} />
        </View>
        <View style={{marginVertical: 8}}>
          <Text style={{flex: 1, flexWrap: 'wrap'}}>{data.name}</Text>
        </View>
        <View
          style={{
            marginBottom: 1,
            marginLeft: 2,
            flexDirection: 'row',
            // height: '100%',
          }}>
          <FontAwesomeIcon
            icon={faClock}
            size={25}
            style={{color: theme === 'light' ? 'black' : 'white'}}
          />
          <Text> {data.timeToComplete}</Text>
        </View>
      </Card>
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
    backgroundColor: '#0E317A',
    width: '150%',
    height: '150%',
    zIndex: -100,
    opacity: 0.5,
  },
});
