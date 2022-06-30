/*
 * Reducer actions related with login
 */
import { SET_THEME } from './types';
import { IThemeSetAction } from 'app/models/actions/theme';

const setIsDarkTheme = (value: boolean): IThemeSetAction => ({
  type: SET_THEME,
  payload: { isDark: value },
});

export { setIsDarkTheme };
