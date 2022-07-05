import React, { useState, useEffect } from 'react';
import { Keyboard, KeyboardAvoidingView, View, Platform } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@navigation/navigation-service';
import { IState } from '@models/reducers/state';
import styles from './styles';
import { screenNames, labels } from '@constants/strings';
import validate from '@constants/regex';
import { showSnackMessage } from '@utils/alerts';
import useOrientation from '@hooks/orientation';
import { requestLogin } from '@store/auth/actions';
import Screen from '@components/screen';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const LoginScreen: React.FC = () => {
  const getComputedResponsiveStyles = () => ({
    container: { paddingHorizontal: wp(3), paddingVertical: hp(2) },
    inputContainer: { paddingBottom: hp(2) },
    forgotButton: { marginTop: hp(1) },
    label: { fontSize: wp(3) },
  });

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [responsiveStyles, setResponsiveStyles] = useState(
    getComputedResponsiveStyles(),
  );

  const { screenOrientation } = useOrientation();

  useEffect(
    () => setResponsiveStyles(getComputedResponsiveStyles()),
    [screenOrientation],
  );

  const { isLoginLoading } = useSelector((state: IState) => state.loading);

  const dispatch = useDispatch();
  const onLogin = () => {
    Keyboard.dismiss();
    if (validate('USERNAME', username) && validate('PASSWORD', password))
      dispatch(requestLogin(username, password));
    else showSnackMessage(labels.invalidCred, true, true);
  };
  const onForgot = () => navigate(screenNames.forgotPassword);

  return (
    <Screen style={[styles.container, responsiveStyles.container]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'padding'}>
        <View style={responsiveStyles.inputContainer}>
          <TextInput
            label={labels.username}
            value={username}
            onChangeText={setUsername}
            autoFocus
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="username"
          />
          <TextInput
            label={labels.password}
            value={password}
            secureTextEntry={hidePassword}
            onChangeText={setPassword}
            autoComplete="password"
            autoCapitalize="none"
            autoCorrect={false}
            right={
              <TextInput.Icon
                onPress={() => setHidePassword(value => !value)}
                name={hidePassword ? 'eye' : 'eye-off'}
              />
            }
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            icon="login"
            mode="outlined"
            loading={isLoginLoading}
            uppercase={false}
            onPress={onLogin}>
            {labels.login}
          </Button>
          <Button
            mode="text"
            uppercase={false}
            style={responsiveStyles.forgotButton}
            labelStyle={responsiveStyles.label}
            onPress={onForgot}>
            {labels.forgotPassword}
          </Button>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default LoginScreen;
