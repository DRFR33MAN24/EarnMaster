import {Text, Card} from '@ui-kitten/components';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
export const WalletTransaction = () => {
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

const styles = StyleSheet.create({
  dateText: {
    fontSize: 10,
    fontFamily: 'normal',
  },
});
