/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';
import ILoadingState from 'app/models/reducers/loading';

const initialState: ILoadingState = {
  isLoginLoading: false,
};

export default createReducer(initialState, {
  [types.LOGIN_ENABLE_LOADER](state: ILoadingState) {
    return { ...state, isLoginLoading: true };
  },
  [types.LOGIN_DISABLE_LOADER](state: ILoadingState) {
    return { ...state, isLoginLoading: false };
  },
});
