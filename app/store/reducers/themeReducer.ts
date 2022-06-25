/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';
import { IThemeToggleAction } from 'app/models/actions/theme';
import IThemeState from 'app/models/reducers/theme';

const initialState: IThemeState = {
  isDark: false,
};

export default createReducer(initialState, {
  [types.TOGGLE_THEME](state: IThemeState, action: IThemeToggleAction) {
    return { ...state, isDark: action.isDark };
  },
});
