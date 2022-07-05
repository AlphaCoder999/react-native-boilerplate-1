/**
 * React Native App
 * Everything starts from the Entry-point
 */
import React from 'react';
import { ActivityIndicator, LogBox } from 'react-native';
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

const { persistor, store } = configureStore();

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const RootNavigation: React.FC = () => {
  const { isDark } = useSelector((state: IState) => state.theme);
  const paperTheme = isDark ? PaperThemeDark : PaperThemeDefault;
  const combinedTheme = isDark ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <Navigator theme={combinedTheme} />
    </PaperProvider>
  );
};

const EntryPoint: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
      <RootNavigation />
    </PersistGate>
  </Provider>
);

export default EntryPoint;
