import React from 'react';

import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  Layout,
  Text,
  useTheme,
  Input,
  Button,
  Card,
  CheckBox,
  Datepicker,
} from '@ui-kitten/components';
import * as Progress from 'react-native-progress';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faEye,
  faEyeSlash,
  faEnvelope,
  faWarning,
} from '@fortawesome/free-solid-svg-icons';

const AlertIcon = props => (
  <View style={{paddingHorizontal: 2}}>
    <FontAwesomeIcon
      icon={faWarning}
      size={15}
      // style={{color: props.style.tintColor}}
    />
  </View>
);

const SplashScreen = props => {
  const splash = './images/logo.png';
  const theme = useTheme();

  const [password, setPassword] = React.useState('');
  const [repeatPassword, setRepeatPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [rememberPassword, setRememberPassword] = React.useState(false);
  const [dateOfBirth, setDateOfBirth] = React.useState(new Date());

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = props => (
    <TouchableOpacity onPress={toggleSecureEntry}>
      {/* <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} /> */}
      {!secureTextEntry ? (
        <FontAwesomeIcon
          icon={faEye}
          size={15}
          // style={{color: props.style.tintColor}}
        />
      ) : (
        <FontAwesomeIcon
          icon={faEyeSlash}
          size={15}
          // style={{color: props.style.tintColor}}
        />
      )}
    </TouchableOpacity>
  );
  const renderEmailIcon = props => (
    <FontAwesomeIcon
      icon={faEnvelope}
      size={15}
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
  const Login = () => {
    return (
      <View style={{width: '95%'}}>
        <ScrollView>
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
          <View style={{paddingVertical: 8, paddingHorizontal: 4}}>
            <CheckBox
              checked={rememberPassword}
              onChange={nextChecked => setRememberPassword(nextChecked)}>
              {`Remember me`}
            </CheckBox>
          </View>
          <View style={{marginVertical: 8}}>
            <Button>Login</Button>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={{color: 'grey'}}>create new account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  };

  const Register = () => {
    return (
      <View style={{width: '95%'}}>
        <ScrollView>
          <Input
            value={name}
            label="Name"
            placeholder="John Doe"
            // caption={renderCaption}
            //accessoryRight={renderEmailIcon}
            // secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setName(nextValue)}
          />
          <Input
            value={email}
            label="Email"
            placeholder="example@domain.com"
            // caption={renderCaption}
            accessoryRight={renderEmailIcon}
            // secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setEmail(nextValue)}
          />
          <View>
            <Datepicker
              label="Enter your birth date"
              date={dateOfBirth}
              onSelect={nextDate => setDateOfBirth(nextDate)}
            />
          </View>
          <Input
            value={password}
            label="Password"
            placeholder="Enter password"
            caption={renderCaption}
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setPassword(nextValue)}
          />
          <Input
            value={repeatPassword}
            label="RePassword"
            placeholder="Enter password"
            caption={renderCaption}
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setRepeatPassword(nextValue)}
          />

          <View style={{marginVertical: 8}}>
            <Button>Register</Button>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={{color: 'grey'}}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
      {/* <Login /> */}
      <Register />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
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
    paddingVertical: 4,
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
