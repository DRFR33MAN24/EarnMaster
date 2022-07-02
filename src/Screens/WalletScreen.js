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
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: theme['background-basic-color-4']}}>
      <TopNavigation title="Wallet" />
      <Divider />
      <ScrollView style={{flex: 1, marginHorizontal: 10}}>
        <View>
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
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
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
            width={Dimensions.get('window').width} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
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

  buttonDarkGlow: {
    shadowColor: '#94CBFF',
    shadowRadius: 5.0,
    shadowOpacity: 10,

    elevation: 10,
  },
});
