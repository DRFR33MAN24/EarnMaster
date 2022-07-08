import React from 'react';

import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
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
import {auth} from '../Constants/images';
import {useSelector, useDispatch} from 'react-redux';
import {login, register} from '../Reducers/authSlice';
const AlertIcon = props => (
  <View style={{paddingHorizontal: 2}}>
    <FontAwesomeIcon
      icon={faWarning}
      size={15}
      // style={{color: props.style.tintColor}}
    />
  </View>
);

const AuthScreen = props => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [register_password, setRegisterPassword] = React.useState('');
  const [login_password, setLoginPassword] = React.useState('');
  const [repeatPassword, setRepeatPassword] = React.useState('');
  const [register_email, setRegisterEmail] = React.useState('');
  const [login_mail, setLoginEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [rememberPassword, setRememberPassword] = React.useState(false);
  const [dateOfBirth, setDateOfBirth] = React.useState(new Date());
  const [registered, setRegistered] = React.useState(false);

  const submitLogin = formData => {};
  const submitRegister = formData => {};
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
  const Login = props => {
    return (
      <View style={{width: '95%'}}>
        <ScrollView>
          <Input
            value={login_mail}
            label="Email"
            placeholder="example@domain.com"
            // caption={renderCaption}
            accessoryRight={renderEmailIcon}
            // secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setLoginEmail(nextValue)}
          />
          <Input
            value={login_password}
            label="Password"
            placeholder="Enter password"
            caption={renderCaption}
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setLoginPassword(nextValue)}
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
            <TouchableOpacity onPress={() => props.setRegistered(false)}>
              <Text style={{color: 'grey'}}>create new account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  };

  const Register = props => {
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
            value={register_email}
            label="Email"
            placeholder="example@domain.com"
            // caption={renderCaption}
            accessoryRight={renderEmailIcon}
            // secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setRegisterEmail(nextValue)}
          />
          <View>
            <Datepicker
              label="Enter your birth date"
              date={dateOfBirth}
              onSelect={nextDate => setDateOfBirth(nextDate)}
            />
          </View>
          <Input
            value={register_password}
            label="Password"
            placeholder="Enter password"
            caption={renderCaption}
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setRegisterPassword(nextValue)}
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
            <TouchableOpacity onPress={() => props.setRegistered(true)}>
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
      <ScrollView style={{width: '100%'}}>
        <View
          style={{
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 40,
          }}>
          <View style={{padding: 40}}>
            <ImageBackground
              source={auth}
              style={styles.imageStyle}
              resizeMode="contain"
            />
          </View>
          {registered ? (
            <Login setRegistered={setRegistered} />
          ) : (
            <Register setRegistered={setRegistered} />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  splashText: {
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  imageStyle: {
    width: 300,
    height: 250,
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

export default AuthScreen;
