import {
  Text,
  Divider,
  Card,
  Button,
  TopNavigation,
} from '@ui-kitten/components';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser, faCoins} from '@fortawesome/free-solid-svg-icons';
import {ThemeContext} from '../../theme-context';

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

  // const navigateDetails = () => {
  //   navigation.navigate('Details');
  // };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation title="Profile" />
      <Divider />

      <ScrollView style={{flex: 1, marginHorizontal: 10}}>
        <Button onPress={themeContext.toggleTheme}>Toggle theme</Button>
      </ScrollView>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({});
