import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-native-paper';
import { IState } from 'app/models/reducers/state';
import styles from './styles';
import { setIsDarkTheme } from 'app/store/theme/actions';

const ThemeSwitch: React.FC = () => {
  const { isDark } = useSelector((state: IState) => state.theme);

  const dispatch = useDispatch();
  const onToggleTheme = () => dispatch(setIsDarkTheme(!isDark));
  const iconName = isDark ? 'weather-night' : 'white-balance-sunny';
  const iconColor = isDark ? 'white' : 'black';

  return (
    <View style={styles.container}>
      <Switch value={isDark} onValueChange={onToggleTheme} />
      <Icon name={iconName} size={20} style={styles.icon} color={iconColor} />
    </View>
  );
};

export default ThemeSwitch;
