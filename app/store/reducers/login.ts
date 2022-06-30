/* Login Reducer
 * handles login states in the app
 */
import { createReducer } from 'app/utils/redux';
import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  LOG_OUT,
} from 'app/store/actions/types';
import { ILoginState } from 'app/models/reducers/login';
import {
  ILoginRequestAction,
  ILoginSuccessAction,
} from 'app/models/actions/login';

const initialState: ILoginState = {
  isLoggedIn: false,
  token: null,
  username: null,
  password: null,
};

export default createReducer(initialState, {
  [LOGIN_REQUEST]: (
    state: ILoginState,
    { payload: { username, password } }: ILoginRequestAction,
  ) => ({
    ...state,
    username,
    password,
  }),

  [LOGIN_RESPONSE]: (
    state: ILoginState,
    { payload: { token } }: ILoginSuccessAction,
  ) => ({
    ...state,
    token,
    isLoggedIn: true,
  }),

  [LOGIN_FAILED]: (state: ILoginState) => ({
    ...state,
    isLoggedIn: false,
    token: null,
    username: null,
    password: null,
  }),

  [LOG_OUT]: (state: ILoginState) => ({
    ...state,
    isLoggedIn: false,
    token: null,
    username: null,
    password: null,
  }),
});
