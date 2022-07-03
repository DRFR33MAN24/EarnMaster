import {
  Text,
  Divider,
  Card,
  Button,
  TopNavigation,
  useTheme,
} from '@ui-kitten/components';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCoins, faWallet} from '@fortawesome/free-solid-svg-icons';
import {WalletTransaction} from '../Components/WalletTransaction';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {transactions} from '../fakeJsonData';
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

export const WalletScreen = ({navigation}) => {
  // const navigateDetails = () => {
  //   navigation.navigate('Details');
  // };
  const uiTheme = useTheme();
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: uiTheme['background-basic-color-4']}}>
      <TopNavigation title="Wallet" />
      <Divider />
      <ScrollView style={{flex: 1, marginHorizontal: 10}}>
        <View>
          <Card>
            <Text category="h6">your total earnings:</Text>
            <Text category="h1">$71.5</Text>
            <View style={{marginVertical: 8}}>
              <Button
                onPress={() => navigation.navigate('Withdraw')}
                style={uiTheme === 'light' ? {} : styles.buttonDarkGlow}>
                Withdraw
              </Button>
            </View>
          </Card>
          <LineChart
            data={{
              labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get('screen').width * 0.95} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: uiTheme['background-basic-color-4'],
              backgroundGradientFrom: uiTheme['background-basic-color-4'],
              backgroundGradientTo: uiTheme['background-basic-color-4'],
              decimalPlaces: 2, // optional, defaults to 2dp
              // color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              // labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              color: (opacity = 1) => uiTheme['color-primary-300'],
              labelColor: (opacity = 1) => uiTheme['color-primary-300'],
              style: {
                borderRadius: 0,
              },
              propsForDots: {
                r: '4',
                strokeWidth: '1',
                stroke: uiTheme['color-primary-300'],
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 0,
            }}
          />
        </View>
        <View>
          <Card>
            <Text>Transaction history:</Text>
          </Card>
        </View>
        {transactions.map(transaction => (
          <WalletTransaction {...transaction} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bigBoldText: {
    fontSize: 40,
    fontFamily: 'normal',
  },

  buttonDarkGlow: {
    shadowColor: '#94CBFF',
    shadowRadius: 5.0,
    shadowOpacity: 10,

    elevation: 10,
  },
});
