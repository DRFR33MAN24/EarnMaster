import React, {useEffect} from 'react';

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
  Modal,
  Popover,
} from '@ui-kitten/components';

import * as Progress from 'react-native-progress';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faEye,
  faEyeSlash,
  faEnvelope,
  faWarning,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import {auth} from '../Constants/images';
import {useSelector, useDispatch} from 'react-redux';
import {login, register, loginGoogle} from '../Reducers/authSlice';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import config from '../config';
import CountryPicker from 'react-native-country-picker-modal';
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
  const auth = useSelector(state => state.auth);
  const [formErrors, setFormErrors] = React.useState({});
  const [registered, setRegistered] = React.useState(false);
  useEffect(() => {
    _configureGoogleSignIn();
  }, []);

  // useEffect(() => {
  //   if (userInfo) {
  //   (async function () {
  //     console.log('getting tokens');
  //     const response = await fetch(
  //       `https://oauth2.googleapis.com/tokeninfo?id_token=${userInfo.idToken}`,
  //     );
  //     const json = await response.json();
  //     console.log(json);
  //   })();
  //   sendIdToken(userInfo.idToken);
  //   }
  // }, [userInfo]);

  // const toggleSecureEntry = () => {
  //   setSecureTextEntry(!secureTextEntry);
  // };

  const _configureGoogleSignIn = () => {
    GoogleSignin.configure({
      webClientId: config.webClientId,
      offlineAccess: false,
    });
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();
      loginGoogle({tokenId: userInfo.idToken, deviceToken: auth.deviceToken});
    } catch (error) {
      console.log(error, error.code);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
      }
    }
  };

  const RenderIcon = ({setSecure, secure}) => (
    <TouchableOpacity onPress={() => setSecure(!secure)}>
      {/* <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} /> */}
      {!secure ? (
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
    const [login_password, setLoginPassword] = React.useState('');

    const [login_mail, setLoginEmail] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const [rememberPassword, setRememberPassword] = React.useState(false);
    const dispatch = useDispatch();
    const submitLogin = () => {
      if (!login_mail) {
        setFormErrors({
          ...formErrors,
          login_mail: 'please enter a valid email address',
        });
        return;
      }
      if (!login_password) {
        setFormErrors({
          ...formErrors,
          login_password: 'please enter a valid password',
        });
        return;
      }
      dispatch(
        login({
          email: login_mail,
          password: login_password,
          deviceToken: auth.deviceToken,
        }),
      );
    };
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
            accessoryRight={
              <RenderIcon
                secure={secureTextEntry}
                setSecure={setSecureTextEntry}
              />
            }
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
            <Button onPress={submitLogin}>Login</Button>
          </View>
          <View>
            <Button
              appearance="outline"
              onPress={() => props.setRegistered(false)}>
              create new account
            </Button>
          </View>
          <View style={{alignItems: 'center', marginVertical: 10}}>
            <GoogleSigninButton
              style={{width: '100%', height: 48}}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={signIn}
              // onPress={this._signIn}
              disabled={false}
              // disabled={this.state.isSigninInProgress}
            />
          </View>
        </ScrollView>
      </View>
    );
  };

  const Register = props => {
    const [repeatPassword, setRepeatPassword] = React.useState('');
    const [register_password, setRegisterPassword] = React.useState('');
    const [register_email, setRegisterEmail] = React.useState('');
    const [dateOfBirth, setDateOfBirth] = React.useState(new Date());
    const [name, setName] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const [secureTextEntryR, setSecureTextEntryR] = React.useState(true);
    const dispatch = useDispatch();
    const submitRegister = () => {
      dispatch(
        register({
          email: register_email,
          password: register_password,
          repeat_password: repeatPassword,
          dob: dateOfBirth,
          username: name,
          deviceToken: auth.deviceToken,
        }),
      );
    };
    return (
      <View style={{width: '95%'}}>
        <ScrollView keyboardShouldPersistTaps="handled">
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
          <View>
            <Text category="label" >Select country</Text>
            <CountryPicker
              countryCode="US"
              visible={false}
              withFlag={true}
              withEmoji={true}
              withCountryNameButton={true}
            />
          </View>
          <Input
            value={register_password}
            label="Password"
            placeholder="Enter password"
            caption={renderCaption}
            accessoryRight={
              <RenderIcon
                secure={secureTextEntry}
                setSecure={setSecureTextEntry}
              />
            }
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setRegisterPassword(nextValue)}
          />
          <Input
            value={repeatPassword}
            label="RePassword"
            placeholder="Enter password"
            caption={renderCaption}
            accessoryRight={
              <RenderIcon
                secure={secureTextEntryR}
                setSecure={setSecureTextEntryR}
              />
            }
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setRepeatPassword(nextValue)}
          />

          <View style={{marginVertical: 8}}>
            <Button onPress={submitRegister}>Register</Button>
          </View>
          <View>
            <Button
              appearance="outline"
              onPress={() => props.setRegistered(true)}>
              Login
            </Button>
          </View>
        </ScrollView>
      </View>
    );
  };

  const anchorView = () => (
    <View style={{position: 'absolute', bottom: '10%'}}></View>
  );
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme['background-basic-color-4']},
      ]}>
      {auth.authErrors.msg && (
        <Popover
          visible={true}
          placement="bottom"
          anchor={anchorView}
          style={{
            backgroundColor: theme['background-basic-color-4'],
            borderWidth: 0,
          }}>
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{marginHorizontal: 5}}>
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                size={25}
                style={{color: theme['color-danger-900']}}
              />
            </View>
            <Text style={{color: theme['color-danger-900']}}>
              {auth.authErrors.msg}
            </Text>
          </View>
        </Popover>
      )}
      <ScrollView style={{width: '100%'}} keyboardShouldPersistTaps="handled">
        <View
          style={{
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 40,
          }}>
          <View style={{padding: 80}}>
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
    width: 100,
    height: 100,
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
