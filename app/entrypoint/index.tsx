/**
 * React Native App
 * Everything starts from the Entry-point
 */
import React from 'react';
import { ActivityIndicator, LogBox, Platform, StatusBar } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider as PaperProvider } from 'react-native-paper';
import {
  PaperThemeDefault,
  PaperThemeDark,
  CombinedDefaultTheme,
  CombinedDarkTheme,
} from '@config/theme-config';
import Navigator from '@navigation';
import configureStore from '@store';
import { IState } from '@models/reducers/state';
import 'react-native-gesture-handler';
import styles from './styles';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { persistor, store } = configureStore();

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const RootNavigation: React.FC = () => {
  const { isDark } = useSelector((state: IState) => state.theme);
  const paperTheme = isDark ? PaperThemeDark : PaperThemeDefault;
  const combinedTheme = isDark ? CombinedDarkTheme : CombinedDefaultTheme;
  const statusBarTheme = Platform.select({
    ios: isDark ? 'light-content' : 'dark-content',
    android: isDark ? 'dark-content' : 'light-content',
    default: 'default',
  });

  return (
    <PaperProvider theme={paperTheme}>
      <StatusBar barStyle={statusBarTheme} />
      <Navigator theme={combinedTheme} />
    </PaperProvider>
  );
};

const EntryPoint: React.FC = () => (
  <Provider store={store}>
    <PersistGate
      loading={<ActivityIndicator size={hp(10)} style={styles.loader} />}
      persistor={persistor}>
      <RootNavigation />
    </PersistGate>
  </Provider>
);

export default EntryPoint;
