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

export const Survey = props => {
  let theme = useContext(ThemeContext).currentTheme;
  return (
    <View style={{flex: 1, flexBasis: '50%', maxWidth: '50%'}}>
      <Card style={{margin: 4}}>
        {/* <View style={{ position: 'absolute', backgroundColor: 'pink', width: '150%', height: '150%', zIndex: -200 }}>

                </View> */}
        <View style={styles.glassyBackground}>
          <Image
            source={require('../Screens/images/glass.png')}
            style={{resizeMode: 'stretch'}}
          />
        </View>
        <View style={{marginTop: 1, marginRight: 2, alignItems: 'flex-end'}}>
          <FontAwesomeIcon
            {...props}
            icon={faStar}
            size={25}
            style={styles.starIcon}
          />
        </View>
        <View style={{marginVertical: 8}}>
          <Text style={{flex: 1, flexWrap: 'wrap'}}>
            Complete the following survey to get your points
          </Text>
        </View>
        <View style={{marginBottom: 1, marginLeft: 2, flexDirection: 'row'}}>
          <FontAwesomeIcon
            {...props}
            icon={faClock}
            size={25}
            style={{color: theme === 'light' ? 'black' : 'white'}}
          />
          <Text> 5 min</Text>
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
