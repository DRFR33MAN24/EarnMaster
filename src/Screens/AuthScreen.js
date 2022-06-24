import React from 'react';

import {Image, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {Layout, Text, useTheme, Input, Button} from '@ui-kitten/components';
import * as Progress from 'react-native-progress';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faEye,
  faEyeDropper,
  faMessage,
  faWarning,
} from '@fortawesome/free-solid-svg-icons';

const AlertIcon = props => (
  <FontAwesomeIcon
    icon={faWarning}
    size={10}
    // style={{color: props.style.tintColor}}
  />
);

const SplashScreen = props => {
  const splash = './images/logo.png';
  const theme = useTheme();

  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      {/* <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} /> */}
      {secureTextEntry === 'eye' ? (
        <FontAwesomeIcon
          icon={faEye}
          size={10}
          // style={{color: props.style.tintColor}}
        />
      ) : (
        <FontAwesomeIcon
          icon={faEyeDropper}
          size={10}
          // style={{color: props.style.tintColor}}
        />
      )}
    </TouchableWithoutFeedback>
  );
  const renderEmailIcon = props => (
    <FontAwesomeIcon
      icon={faMessage}
      size={10}
      // style={{color: props.style.tintColor}}
    />
  );

  const renderCaption = () => {
    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <Text style={styles.captionText}>
          Should contain at least 8 symbols
        </Text>
      </View>
    );
  };
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme['background-basic-color-4']},
      ]}>
      <Image source={require(splash)} style={styles.imageStyle} />
      <Input
        value={email}
        label="Email"
        placeholder="example@domain.com"
        // caption={renderCaption}
        accessoryRight={renderEmailIcon}
        // secureTextEntry={secureTextEntry}
        onChangeText={nextValue => setEmail(nextValue)}
      />
      <Input
        value={password}
        label="Password"
        placeholder="Enter password"
        caption={renderCaption}
        accessoryRight={renderIcon}
        secureTextEntry={secureTextEntry}
        onChangeText={nextValue => setPassword(nextValue)}
      />
      <Button>Login</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  imageStyle: {
    width: 128,
    height: 128,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
  },
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'opensans-regular',
    color: '#8F9BB3',
  },
});

export default SplashScreen;
