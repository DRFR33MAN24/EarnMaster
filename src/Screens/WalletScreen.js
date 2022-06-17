import { Text, Divider } from '@ui-kitten/components';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoins, faWallet } from '@fortawesome/free-solid-svg-icons';

export const walletIcon = props => (
  <FontAwesomeIcon {...props} icon={faWallet} size={25} style={{ color: props.style.tintColor }} />
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

        <FontAwesomeIcon icon={faCoins} size={25} style={{ color: 'gold' }} />
        <Text> 100</Text>
      </View>
    </View>
  );
};
export const WalletScreen = ({ navigation }) => {
  // const navigateDetails = () => {
  //   navigation.navigate('Details');
  // };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider />

      <ScrollView style={{ flex: 1 }}></ScrollView>
    </SafeAreaView>
  );
};
