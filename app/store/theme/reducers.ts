/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import { createReducer } from '@utils/redux';
import { SET_THEME } from './action-types';
import { IThemeSetAction } from '@models/actions/theme';
import { IThemeState } from '@models/reducers/theme';

const initialState: IThemeState = {
  isDark: false,
};

export default createReducer(initialState, {
  [SET_THEME]: (
    state: IThemeState,
    { payload: { isDark } }: IThemeSetAction,
  ) => ({
    ...state,
    isDark,
  }),
});
