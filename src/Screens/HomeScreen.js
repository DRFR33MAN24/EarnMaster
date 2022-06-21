import {
  Text,
  Button,
  Divider,
  Card,
  Icon,
  TopNavigationAction,
  TopNavigation,
  useTheme,
} from '@ui-kitten/components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBell,
  faCoins,
  faHome,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';
import {BackIcon} from '../Components/NavigationComponents';

export const homeIcon = props => (
  <FontAwesomeIcon
    {...props}
    icon={faHome}
    size={25}
    style={{color: props.style.tintColor}}
  />
);

export const CoinsComponent = props => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'flex-start',
    }}>
    {/* <Text style={styles.badge}> 2 </Text> */}

    <FontAwesomeIcon icon={faCoins} size={18} style={{color: 'gold'}} />
    <Text style={{fontSize: 12}}> 100</Text>
  </View>
);
export const NotificationIcon = props => (
  <View>
    <Button
      appearance="ghost"
      onPress={() => props.navigation.navigate('Notification')}
      style={{padding: 0}}>
      <View style={styles.badgeIconView}>
        <Text style={styles.badge}> 2 </Text>

        <FontAwesomeIcon icon={faBell} size={20} style={{color: 'gold'}} />
      </View>
    </Button>
  </View>
);
export const HomeScreenContainer = props => (
  <View
    style={{
      paddingHorizontal: 4,
      flexDirection: 'row',
      alignItems: 'center',
    }}>
    <NotificationIcon {...props} />
    <CoinsComponent />
  </View>
);

export const HomeScreenTopBar = () => {
  let navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          paddingHorizontal: 4,
        }}>
        <Button
          appearance="ghost"
          onPress={() => navigation.navigate('Notification')}
          style={{padding: 0}}>
          <View style={styles.badgeIconView}>
            <Text style={styles.badge}> 2 </Text>

            <FontAwesomeIcon icon={faBell} size={25} style={{color: 'gold'}} />
          </View>
        </Button>
      </View>
      <View
        style={{
          paddingHorizontal: 4,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          {/* <Text style={styles.badge}> 2 </Text> */}

          <FontAwesomeIcon icon={faCoins} size={25} style={{color: 'gold'}} />
          <Text> 100</Text>
        </View>
      </View>
    </View>
  );
};

export const HomeScreen = ({navigation}) => {
  // const navigateDetails = () => {
  //   navigation.navigate('Details');
  // };
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: theme['background-basic-color-1']}}>
      <TopNavigation
        title="Dashboard"
        accessoryRight={<HomeScreenContainer navigation={navigation} />}
      />
      <Divider />

      <ScrollView style={{flex: 1}}>
        <Card style={styles.goalsCard}>
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
                  Complete offers
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
              <TouchableOpacity onPress={() => navigation.navigate('Surveys')}>
                <Image
                  source={require('./images/history.png')}
                  style={styles.homeScreenButtonImage}
                />
                <Text numberOfLines={1} style={{flex: 1}}>
                  Paid Surveys
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
    margin: 5,
    borderWidth: 2,

    borderRadius: 20,
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
  goalsCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    marginHorizontal: 18,
    marginVertical: 10,
    borderWidth: 2,

    borderRadius: 20,
  },
  badgeIconView: {
    position: 'relative',
    padding: 5,
  },
  badge: {
    color: '#fff',
    position: 'absolute',
    zIndex: 10,
    top: 1,
    right: 1,
    padding: 1,
    backgroundColor: 'red',
    borderRadius: 5,
    fontSize: 8,
  },
});
