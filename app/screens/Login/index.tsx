import React, { useState } from 'react';
import { Keyboard, ScrollView, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { requestLogin } from 'app/store/actions/login';
import { navigate } from 'app/navigation/navigation-service';
import { IState } from 'app/models/reducers/state';
import styles from './styles';
import { screenNames, labels } from '../../constants/strings';
import { showSnackMessage } from 'app/utils/alerts';
import validate from '../../constants/regex';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [hidePassword, setHidePassword] = useState<boolean>(true);

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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          label={labels.username}
          value={username}
          onChangeText={setUsername}
          autoFocus
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="username"
        />
        <TextInput
          style={styles.input}
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
        style={styles.forgot}
        labelStyle={styles.labelStyle}
        onPress={onForgot}>
        {labels.forgotPassword}
      </Button>
    </ScrollView>
  );
};

export default LoginScreen;
