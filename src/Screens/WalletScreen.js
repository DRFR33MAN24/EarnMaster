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

      <ScrollView style={{flex: 1, marginHorizontal: 10}}>
        <View>
          <Card>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View>
                <Text category="h6">Total</Text>
                <Text category="h1">$71.5</Text>
              </View>
              <View>
                <Text category="h6">Pending</Text>
                <Text category="h1">$22.5</Text>
              </View>
            </View>
            <View style={{marginVertical: 8}}>
              <Button
                onPress={() => navigation.navigate('Withdraw')}
                style={uiTheme === 'light' ? {} : styles.buttonDarkGlow}>
                Withdraw
              </Button>
            </View>
          </Card>

          <Card>
            <Text>Performance</Text>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
                width={Dimensions.get('window').width} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                withHorizontalLabels={false}
                withHorizontalLines={false}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: `rgba(255, 255, 255, 255)`,
                  backgroundGradientFrom: `rgba(255, 255, 255, 255)`,
                  backgroundGradientTo: `rgba(255, 255, 255, 255)`,
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
          </Card>
        </View>
        <View>
          <Card disabled={true}>
            <Text category="s1">Transaction history:</Text>
          </Card>
        </View>
        {transactions.map((transaction, index) => (
          <WalletTransaction {...transaction} key={index} />
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
