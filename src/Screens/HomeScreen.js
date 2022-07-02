import {
  Text,
  Button,
  Divider,
  Card,
  Icon,
  TopNavigationAction,
  TopNavigation,
  useTheme,
  Input,
} from '@ui-kitten/components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBell,
  faCoins,
  faHome,
  faChevronLeft,
  faGift,
} from '@fortawesome/free-solid-svg-icons';
import React, {useState, useContext, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import {BackIcon} from '../Components/NavigationComponents';
import {DailyGoals} from '../Components/DailyGoals';
import {
  gambler,
  checklist,
  ribbon,
  television,
  dollar,
  facebook,
  twitter,
  instagram,
} from '../Constants/images';
import {surveysData} from '../fakeJsonData';
import {Survey, WideSurvey} from '../Components/Survey';

import Carousel from 'react-native-reanimated-carousel';
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
      source={dollar}
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
  const [referral, setReferral] = useState('');
  const [surveys, setSurveys] = useState([]);
  useEffect(() => {
    // api call
    setSurveys(surveysData);
    //console.log(surveyData);
  }, []);
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: theme['background-basic-color-4']}}>
      <TopNavigation
        title="Dashboard"
        accessoryRight={<HomeScreenContainer navigation={navigation} />}
      />
      <Divider />

      <ScrollView style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
          }}>
          <Carousel
            autoPlay={true}
            width={Dimensions.get('window').width * 0.95}
            autoPlayInterval={3000}
            height={115}
            data={surveysData}
            renderItem={({item, index}) => (
              <WideSurvey key={index} data={item} />
            )}
          />
        </View>
        <DailyGoals />

        {/* <View style={{marginHorizontal: 10}}>
          {surveys != null &&
            surveys.map(survey => <WideSurvey data={survey} />)}
        </View> */}
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            // flex: 1,
            marginHorizontal: 10,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          {surveys != null && surveys.map(survey => <Survey data={survey} />)}
          {/* <Survey />
          <Survey /> */}
        </View>
        {/* <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          <Card style={styles.homeScreenButton}>
            <TouchableOpacity>
              <View>
                <Image source={ribbon} style={styles.homeScreenButtonImage} />

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
                  source={television}
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
                <Image source={gambler} style={styles.homeScreenButtonImage} />
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
                  source={checklist}
                  style={styles.homeScreenButtonImage}
                />
                <Text numberOfLines={1} style={{flex: 1}}>
                  Paid Surveys
                </Text>
              </View>
            </TouchableOpacity>
          </Card>
        </View> */}
        <View>
          <Card style={{marginVertical: 10}}>
            <Text>Refer friend and earn</Text>
            <View style={{marginVertical: 2}}>
              <Input
                value={referral}
                label="Friend Email"
                placeholder="enter email here"
                // caption={renderCaption}
                //accessoryRight={renderEmailIcon}
                // secureTextEntry={secureTextEntry}
                onChangeText={nextValue => setReferral(nextValue)}
              />
            </View>
            <View style={{marginVertical: 2, paddingVertical: 10}}>
              <Button>Send Link</Button>
            </View>
            <TouchableOpacity>
              <View style={{marginVertical: 2, paddingVertical: 10}}>
                <Text>Active referrals: 15</Text>
              </View>
            </TouchableOpacity>
          </Card>
        </View>
        <View>
          <Card style={{marginVertical: 10}}>
            <Text>Follow us on social media</Text>
          </Card>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: 20,
            }}>
            <Card
              style={[styles.homeScreenButton, {backgroundColor: '#4267B2'}]}>
              <TouchableOpacity>
                <View>
                  <Image source={facebook} style={styles.homeScreenSocial} />
                  <Text numberOfLines={1} style={{flex: 1}}>
                    Facebook
                  </Text>
                </View>
              </TouchableOpacity>
            </Card>

            <Card
              style={[styles.homeScreenButton, {backgroundColor: '#1DA1F2'}]}>
              <TouchableOpacity>
                <View>
                  <Image source={twitter} style={styles.homeScreenSocial} />
                  <Text numberOfLines={1} style={{flex: 1}}>
                    Twitter
                  </Text>
                </View>
              </TouchableOpacity>
            </Card>

            <Card style={[styles.homeScreenButton, {backgroundColor: 'white'}]}>
              <TouchableOpacity>
                <View>
                  <Image source={instagram} style={[styles.homeScreenSocial]} />
                  <Text numberOfLines={1} style={{flex: 1}}>
                    Instagram
                  </Text>
                </View>
              </TouchableOpacity>
            </Card>
          </View>
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
  homeScreenSocial: {
    width: 64,
    height: 64,
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
