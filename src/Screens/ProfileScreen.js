import {
  Text,
  Divider,
  Card,
  Button,
  TopNavigation,
  Layout,
  useTheme,
  Toggle,
} from '@ui-kitten/components';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUser,
  faCoins,
  faSignOut,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {ThemeContext} from '../../theme-context';
import {facebook, twitter, instagram} from '../Constants/images';
export const profileIcon = props => (
  <FontAwesomeIcon
    {...props}
    icon={faUser}
    size={25}
    style={{color: props.style.tintColor}}
  />
);
export const ProfileScreenTopBar = () => {
  let navigation = useNavigation();

  return (
    <View
      style={{
        paddingHorizontal: 4,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          paddingHorizontal: 2,
        }}>
        {/* <Text style={styles.badge}> 2 </Text> */}

        <FontAwesomeIcon icon={faCoins} size={25} style={{color: 'gold'}} />
        <Text> 100</Text>
      </View>
    </View>
  );
};

export const ProfileScreen = ({navigation}) => {
  const themeContext = React.useContext(ThemeContext);
  const theme = useTheme();
  const [checked, setChecked] = useState(false);

  const onCheckedChange = isChecked => {
    setChecked(isChecked);
    themeContext.toggleTheme();
  };
  // const navigateDetails = () => {
  //   navigation.navigate('Details');
  // };

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: theme['background-basic-color-4']}}>
      <TopNavigation title="Profile" />
      <Divider />

      <ScrollView style={{flex: 1, marginHorizontal: 10, marginVertical: 20}}>
        <Card>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 20,
            }}>
            <Image
              source={require('./images/profile.png')}
              style={{resizeMode: 'center', width: 96, height: 96}}
            />
            <Text>Martin Mystery</Text>
          </View>
        </Card>
        <Divider />
        <Card>
          <Text>Email:</Text>
        </Card>
        <Card>
          <Text>Membership:</Text>
        </Card>
        <Card>
          <Text>Referral Code:</Text>
        </Card>
        <Card>
          <Text>Total Earnings:</Text>
        </Card>
        {/* <Card>
          <Button onPress={themeContext.toggleTheme}>Toggle theme</Button>
        </Card> */}
        <Card>
          <TouchableOpacity>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Logout</Text>
              <FontAwesomeIcon
                icon={faSignOut}
                size={25}
                style={{
                  color:
                    themeContext.currentTheme === 'light' ? 'black' : 'white',
                }}
              />
            </View>
          </TouchableOpacity>
        </Card>
        <Card>
          <TouchableOpacity>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Contact support</Text>
              <FontAwesomeIcon
                icon={faPhone}
                size={25}
                style={{
                  color:
                    themeContext.currentTheme === 'light' ? 'black' : 'white',
                }}
              />
            </View>
          </TouchableOpacity>
        </Card>
        <Card>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Change Theme</Text>
            <Toggle checked={checked} onChange={onCheckedChange}></Toggle>
          </View>
        </Card>
        <Card>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>About US</Text>
          </View>
        </Card>
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
                  <Text numberOfLines={1} style={{flex: 1, color: 'black'}}>
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
                  <Text numberOfLines={1} style={{flex: 1, color: 'black'}}>
                    Twitter
                  </Text>
                </View>
              </TouchableOpacity>
            </Card>

            <Card style={[styles.homeScreenButton, {backgroundColor: 'white'}]}>
              <TouchableOpacity>
                <View>
                  <Image source={instagram} style={[styles.homeScreenSocial]} />
                  <Text numberOfLines={1} style={{flex: 1, color: 'black'}}>
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
  homeScreenSocial: {
    width: 64,
    height: 64,
    resizeMode: 'stretch',
  },
  homeScreenButton: {
    margin: 5,
    borderWidth: 2,

    borderRadius: 20,
  },
});
