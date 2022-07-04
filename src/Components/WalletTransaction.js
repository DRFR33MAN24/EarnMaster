import {Text, Card, Button, useTheme} from '@ui-kitten/components';
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

export const WalletTransaction = ({id, type, amount, state, submitDate}) => {
  const uiTheme = useTheme();
  const RenderState = ({state}) => {
    switch (state) {
      case 'rejected':
        return (
          <Text style={{color: uiTheme['color-danger-default']}}>REJECTED</Text>
        );

      case 'pending':
        return (
          <Text style={{color: uiTheme['color-warning-default']}}>PENDING</Text>
        );

      case 'approved':
        return (
          <TouchableOpacity>
            <Text style={{color: uiTheme['color-success-default']}}>OPEN</Text>
          </TouchableOpacity>
        );
      default:
        return null;
    }
  };
  return (
    <Card disabled={true}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: amount > 0 ? 'green' : 'red'}}>
            {amount.toFixed(2)}
          </Text>
          <Text> {type}</Text>
        </View>
        <RenderState state={state} />
      </View>
      <Text style={styles.dateText}>{submitDate}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  dateText: {
    fontSize: 10,
    fontFamily: 'normal',
  },
});
