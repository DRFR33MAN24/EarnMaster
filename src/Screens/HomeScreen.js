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
  faGift,
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
import * as Animatable from 'react-native-animatable';
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

    <Image
      source={require('./images/dollar.png')}
      style={{width: 16, height: 16, opacity: 1, resizeMode: 'stretch'}}
    />
    {/* <FontAwesomeIcon icon={faCoins} size={18} style={{color: 'gold'}} /> */}
    <Text style={{fontSize: 12}}> 100</Text>
  </View>
);
export const NotificationIcon = props => (
  <Animatable.View animation="swing" easing="ease-out" iterationCount={3}>
    <Button
      appearance="ghost"
      onPress={() => props.navigation.navigate('Notification')}
      style={{padding: 0}}>
      <View style={styles.badgeIconView}>
        <Text style={styles.badge}> 2 </Text>

        <FontAwesomeIcon icon={faBell} size={20} style={{color: 'gold'}} />
      </View>
    </Button>
  </Animatable.View>
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
      style={{flex: 1, backgroundColor: theme['background-basic-color-4']}}>
      <TopNavigation
        title="Dashboard"
        accessoryRight={<HomeScreenContainer navigation={navigation} />}
      />
      <Divider />

      <ScrollView style={{flex: 1}}>
        <Card style={styles.goalsCard}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={[{fontSize: 20}]}>Lv #1</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Progress.Circle
                progress={0.5}
                size={60}
                showsText={true}
                textStyle={{fontSize: 12, fontFamily: 'Roboto-Bold'}}
                // width={200}
                // height={15}
                thickness={8}
                borderWidth={0}
                color={theme['color-primary-default']}
                unfilledColor={theme['background-basic-color-4']}
              />
            </View>
            <Animatable.View
              animation="pulse"
              easing="ease-out"
              iterationCount="infinite">
              <Image
                source={require('./images/giftbox.png')}
                style={styles.acheivementImage}
              />
            </Animatable.View>
          </View>
        </Card>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          <Card style={styles.homeScreenButton}>
            <TouchableOpacity>
              <View>
                <Image
                  source={require('./images/ribbon.png')}
                  style={styles.homeScreenButtonImage}
                />

                <Text numberOfLines={1} style={{flex: 1}}>
                  Complete offers
                </Text>
              </View>
            </TouchableOpacity>
          </Card>

          <Card style={styles.homeScreenButton}>
            <TouchableOpacity>
              <View>
                <Image
                  source={require('./images/television.png')}
                  style={styles.homeScreenButtonImage}
                />
                <Text numberOfLines={1} style={{flex: 1}}>
                  Watch Ads
                </Text>
              </View>
            </TouchableOpacity>
          </Card>

          <Card style={styles.homeScreenButton}>
            <TouchableOpacity>
              <View>
                <Image
                  source={require('./images/gambler.png')}
                  style={styles.homeScreenButtonImage}
                />
                <Text numberOfLines={1} style={{flex: 1}}>
                  Gamble!
                </Text>
              </View>
            </TouchableOpacity>
          </Card>

          <Card style={styles.homeScreenButton}>
            <TouchableOpacity onPress={() => navigation.navigate('Surveys')}>
              <View>
                <Image
                  source={require('./images/checklist.png')}
                  style={styles.homeScreenButtonImage}
                />
                <Text numberOfLines={1} style={{flex: 1}}>
                  Paid Surveys
                </Text>
              </View>
            </TouchableOpacity>
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
    width: 32,
    height: 32,
    opacity: 0.2,
    resizeMode: 'stretch',
  },
  textWithShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  giftHalo: {
    shadowColor: 'gold',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 5.0,

    elevation: 50,
  },
  goalsCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    // paddingVertical: 20,
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
