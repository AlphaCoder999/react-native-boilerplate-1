/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import { createReducer } from '@utils/redux';
import { ILoadingState } from '@models/reducers/loading';
import {
  LOGIN_DISABLE_LOADER,
  LOGIN_ENABLE_LOADER,
  NOTIF_ENABLE_LOADER,
  NOTIF_DISABLE_LOADER,
} from './action-types';

const initialState: ILoadingState = {
  isLoggingIn: false,
  isFetchingNotifications: false,
};

export default createReducer(initialState, {
  [LOGIN_ENABLE_LOADER]: (state: ILoadingState) => ({
    ...state,
    isLoggingIn: true,
  }),
  [LOGIN_DISABLE_LOADER]: (state: ILoadingState) => ({
    ...state,
    isLoggingIn: false,
  }),

  [NOTIF_ENABLE_LOADER]: (state: ILoadingState) => ({
    ...state,
    isFetchingNotifications: true,
  }),
  [NOTIF_DISABLE_LOADER]: (state: ILoadingState) => ({
    ...state,
    isFetchingNotifications: false,
  }),
});
