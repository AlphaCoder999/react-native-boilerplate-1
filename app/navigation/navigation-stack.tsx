import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { navigationRef } from './navigation-service';
import LoginScreen from 'app/screens/login';
import HomeScreen from 'app/screens/home';
import ForgotPasswordScreen from 'app/screens/forgot-password';
import ThemeSwitch from '../components/theme-switch';
import { StatusBar, Platform } from 'react-native';
import { IState } from 'app/models/reducers/state';
import { labels, screenNames, stackNames } from 'app/constants/strings';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();

interface IProps {
  theme: Theme;
}

const AuthNavigator = () => {
  const { isLoggedIn } = useSelector((state: IState) => state.login);

  const screenOptions = {
    // When logging out, a pop animation feels intuitive
    // You can remove this if you want the default 'push' animation
    animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
    headerRight: () => <ThemeSwitch />,
    headerTitleStyle: { fontWeight: 'bold' },
  };

  return (
    <AuthStack.Navigator>
      <Stack.Screen
        name={screenNames.login}
        component={LoginScreen}
        options={{ ...screenOptions, title: labels.login }}
      />
      <Stack.Screen
        name={screenNames.forgotPassword}
        component={ForgotPasswordScreen}
        options={{ ...screenOptions, title: labels.forgotPassword }}
      />
    </AuthStack.Navigator>
  );
};

const LoggedInNavigator = () => {
  const screenOptions = {
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: () => <ThemeSwitch />,
  };

  return (
    <LoggedInStack.Navigator>
      <Stack.Screen
        name={screenNames.home}
        component={HomeScreen}
        options={{ ...screenOptions, title: labels.home }}
      />
    </LoggedInStack.Navigator>
  );
};

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;
  const { isLoggedIn } = useSelector((state: IState) => state.login);
  const screenOptions = {
    // When logging out, a pop animation feels intuitive
    // You can remove this if you want the default 'push' animation
    animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
    headerRight: () => <ThemeSwitch />,
  };

  const statusBarTheme = Platform.select({
    ios: theme.dark ? 'light-content' : 'dark-content',
    android: theme.dark ? 'dark-content' : 'light-content',
    default: 'default',
  });

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={statusBarTheme} />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen
            name={stackNames.home}
            component={LoggedInNavigator}
            options={screenOptions}
          />
        ) : (
          <Stack.Screen
            name={stackNames.auth}
            component={AuthNavigator}
            options={screenOptions}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
