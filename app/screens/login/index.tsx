import React, { useEffect, useReducer } from 'react';
import { Keyboard, KeyboardAvoidingView, View, Platform } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { labels, screenNames } from '@constants/strings';
import validate from '@constants/regex';
import { showSnackMessage } from '@utils/alerts';
import useOrientation from '@hooks/orientation';
import { requestLogin } from '@store/auth/actions';
import Screen from '@components/screen';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { IState as IStoreState } from '@models/reducers/state';
import { IAction, IResponsiveStyles, IState } from './types';

const getComputedResponsiveStyles = (): IResponsiveStyles => ({
  container: { paddingHorizontal: wp(3), paddingVertical: hp(2) },
  inputContainer: { paddingBottom: hp(2) },
  forgotButton: { marginTop: hp(1) },
  buttonText: { fontSize: wp(3.5) },
  linkButtonText: { fontSize: wp(2.8) },
});

const INITIAL_STATE: IState = {
  username: 'admin',
  password: 'Admin@123',
  hidePassword: true,
  responsiveStyles: getComputedResponsiveStyles(),
};

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_HIDE_PASSWORD':
      return { ...state, hidePassword: action.payload };
    case 'UPDATE_RESPONSIVE_STYLES':
      return { ...state, responsiveStyles: action.payload };
    default:
      throw new Error('Invalid action type ' + action.type);
  }
};

const LoginScreen: React.FC = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const { screenOrientation } = useOrientation();

  useEffect(
    () =>
      dispatch({
        type: 'UPDATE_RESPONSIVE_STYLES',
        payload: getComputedResponsiveStyles(),
      }),
    [screenOrientation],
  );

  const { isLoggingIn } = useSelector((state: IStoreState) => state.loading);

  const storeDispatch = useDispatch();

  const onLogin = () => {
    Keyboard.dismiss();
    if (
      validate('USERNAME', state.username) &&
      validate('PASSWORD', state.password)
    )
      storeDispatch(requestLogin(state.username, state.password));
    else showSnackMessage(labels.invalidCred, true, true);
  };

  /* NOTE: Sample of making use of the navigator's navigation object
      to navigate to another screen and passing data along with it */
  const onForgotPress = () =>
    navigation.navigate(screenNames.forgotPassword, {
      username: state.username,
    });

  const setUsername = (value: string) =>
    dispatch({ type: 'SET_USERNAME', payload: value });

  const setPassword = (value: string) =>
    dispatch({ type: 'SET_PASSWORD', payload: value });

  const setHidePassword = () =>
    dispatch({ type: 'SET_HIDE_PASSWORD', payload: !state.hidePassword });

  return (
    <Screen style={[styles.container, state.responsiveStyles.container]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'padding'}>
        <View style={state.responsiveStyles.inputContainer}>
          <TextInput
            label={labels.username}
            value={state.username}
            onChangeText={setUsername}
            autoFocus
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="username"
          />
          <TextInput
            label={labels.password}
            value={state.password}
            secureTextEntry={state.hidePassword}
            onChangeText={setPassword}
            autoComplete="password"
            autoCapitalize="none"
            autoCorrect={false}
            right={
              <TextInput.Icon
                onPress={setHidePassword}
                name={state.hidePassword ? 'eye' : 'eye-off'}
              />
            }
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            icon="login"
            mode="outlined"
            loading={isLoggingIn}
            disabled={isLoggingIn}
            uppercase={false}
            labelStyle={state.responsiveStyles.buttonText}
            onPress={onLogin}>
            {labels.login}
          </Button>
          <Button
            mode="text"
            uppercase={false}
            style={state.responsiveStyles.forgotButton}
            labelStyle={state.responsiveStyles.linkButtonText}
            onPress={onForgotPress}>
            {labels.forgotPassword}
          </Button>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default LoginScreen;
