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
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import React, {useState, useContext, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  RefreshControl,
  FlatList,
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
import {Survey, WideSurvey, WideSurvey2} from '../Components/Survey';
import {Congratulation} from '../Components/Congratulation';
import Carousel from 'react-native-reanimated-carousel';

import {useDispatch, useSelector} from 'react-redux';
import {fetchOffers} from '../Reducers/offersSlice';
import {fetchNotifications} from '../Reducers/notificationSlice';
import {reloadUser} from '../Reducers/authSlice';

export const homeIcon = props => (
  <FontAwesomeIcon
    {...props}
    icon={faHome}
    size={25}
    style={{color: props.style.tintColor}}
  />
);

export const CoinsComponent = props => {
  const balance = useSelector(state => state.auth.user.balance);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reloadUser());
  }, []);
  return (
    <TouchableOpacity onPress={() => dispatch(reloadUser())}>
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
        <Text style={{fontSize: 12}}> {balance}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const NotificationIcon = props => {
  const dispatch = useDispatch();
  const notificationsCount = useSelector(
    state => state.notifications.total_notifications,
  );

  useEffect(() => {
    dispatch(fetchNotifications(0));
  }, []);
  return (
    <Animatable.View animation="swing" easing="ease-out" iterationCount={3}>
      <Button
        appearance="ghost"
        onPress={() => props.navigation.navigate('Notification')}
        style={{padding: 0}}>
        <View style={styles.badgeIconView}>
          <Text style={styles.badge}> {notificationsCount} </Text>

          <FontAwesomeIcon icon={faBell} size={20} style={{color: 'gold'}} />
        </View>
      </Button>
    </Animatable.View>
  );
};

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

  const dispatch = useDispatch();
  const {offers, offset, total_offers} = useSelector(state => state.offers);

  const theme = useTheme();
  const [referral, setReferral] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    //setRefreshing(true);
    getOffers(0);
  }, []);

  const getOffers = offset => {
    if (offset <= total_offers) {
      console.log(offset);
      dispatch(fetchOffers(offset));
    }
  };
  useEffect(() => {
    // api call
    getOffers(0);
  }, []);

  const HomeScreenHeaderComponent = () => {
    return (
      <ScrollView
        style={{flex: 1}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              marginVertical: 10,
            }}>
            <Text category="h5">Featured Offers</Text>
            <FontAwesomeIcon icon={faChevronRight} size={20} />
          </View>
        </TouchableOpacity>
        <Carousel
          // mode="horizontal-stack"
          // modeConfig={{
          //   snapDirection: 'left',
          //   stackInterval: 18,
          // }}
          autoPlay={true}
          width={Dimensions.get('screen').width}
          autoPlayInterval={3000}
          height={115}
          data={offers}
          style={{
            width: '100%',
            marginVertical: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          renderItem={({item, index}) => (
            <View
              style={{
                padding: 0,
                margin: 0,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}>
              <WideSurvey2 key={index} data={item} />
            </View>
          )}
        />
        <DailyGoals />

        {/* <View style={{marginHorizontal: 10}}>
          {surveys != null &&
            surveys.map(survey => <WideSurvey data={survey} />)}
        </View> */}
        <View>
          <Card style={{marginVertical: 10, marginHorizontal: 10}}>
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
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              marginVertical: 10,
            }}>
            <Text category="h5">For You</Text>
            <FontAwesomeIcon icon={faChevronRight} size={20} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: theme['background-basic-color-4']}}>
      <TopNavigation
        title="Dashboard"
        accessoryRight={<HomeScreenContainer navigation={navigation} />}
      />
      <Divider />
      {/* <Congratulation /> */}

      <FlatList
        data={offers}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => <Survey data={item} key={index} />}
        numColumns={2}
        ListHeaderComponent={HomeScreenHeaderComponent}
        onEndReached={() => getOffers(offset)}
        onEndReachedThreshold={0.1}
      />
      {/* <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            // flex: 1,
            marginHorizontal: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}></View> */}

      {/* <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            // flex: 1,
            marginHorizontal: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {offers != null &&
            offers.map((offer, index) => <Survey data={offer} key={index} />)}

        </View> */}
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
