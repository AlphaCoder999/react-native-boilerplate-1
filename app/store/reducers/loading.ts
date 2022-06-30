/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import { createReducer } from 'app/utils/redux';
import {
  LOGIN_DISABLE_LOADER,
  LOGIN_ENABLE_LOADER,
} from 'app/store/actions/types';
import { ILoadingState } from 'app/models/reducers/loading';

const initialState: ILoadingState = {
  isLoginLoading: false,
};

export default createReducer(initialState, {
  [LOGIN_ENABLE_LOADER]: (state: ILoadingState) => ({
    ...state,
    isLoginLoading: true,
  }),
  [LOGIN_DISABLE_LOADER]: (state: ILoadingState) => ({
    ...state,
    isLoginLoading: false,
  }),
});
