import {
  Text,
  Divider,
  Card,
  Button,
  TopNavigation,
  useTheme,
} from '@ui-kitten/components';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCoins, faWallet} from '@fortawesome/free-solid-svg-icons';

export const walletIcon = props => (
  <FontAwesomeIcon
    {...props}
    icon={faWallet}
    size={25}
    style={{color: props.style.tintColor}}
  />
);
export const WalletScreenTopBar = () => {
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
const WalletTransaction = () => {
  return (
    <Card>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'red'}}>-$5.00</Text>
        <Text> Visa prepaid card.</Text>
      </View>
      <Text style={styles.dateText}>12/12/12</Text>
    </Card>
  );
};
export const WalletScreen = ({navigation}) => {
  // const navigateDetails = () => {
  //   navigation.navigate('Details');
  // };
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: theme['background-basic-color-4']}}>
      <TopNavigation title="Wallet" />
      <Divider />
      <ScrollView style={{flex: 1, marginHorizontal: 10}}>
        <View style={{margin: 10}}>
          <Card>
            <Text>your total earnings:</Text>
            <Text style={styles.bigBoldText}>$71.5</Text>
            <View style={{marginVertical: 8}}>
              <Button
                onPress={() => navigation.navigate('Withdraw')}
                style={theme === 'light' ? {} : styles.buttonDarkGlow}>
                Withdraw
              </Button>
            </View>
          </Card>
        </View>
        <View>
          <Card>
            <Text>Transaction history:</Text>
          </Card>
        </View>
        <WalletTransaction />
        <WalletTransaction />
        <WalletTransaction />
        <WalletTransaction />
        <WalletTransaction />
        <WalletTransaction />
        <WalletTransaction />
        <WalletTransaction />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bigBoldText: {
    fontSize: 40,
    fontFamily: 'normal',
  },
  dateText: {
    fontSize: 10,
    fontFamily: 'normal',
  },
  buttonDarkGlow: {
    shadowColor: '#94CBFF',
    shadowRadius: 5.0,
    shadowOpacity: 10,

    elevation: 10,
  },
});
