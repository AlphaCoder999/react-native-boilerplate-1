import { createReducer } from '@utils/redux';
import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  LOG_OUT,
} from '@store/auth/action-types';
import { IAuthState } from '@models/reducers/auth';
import { IAuthRequestAction, IAuthSuccessAction } from '@models/actions/auth';

const initialState: IAuthState = {
  isLoggedIn: false,
  token: null,
  username: null,
  password: null,
};

const authReducer = createReducer(initialState, {
  [LOGIN_REQUEST]: (
    state: IAuthState,
    { payload: { username, password } }: IAuthRequestAction,
  ) => ({
    ...state,
    username,
    password,
  }),

  [LOGIN_RESPONSE]: (
    state: IAuthState,
    { payload: { token } }: IAuthSuccessAction,
  ) => ({
    ...state,
    token,
    isLoggedIn: true,
  }),

  [LOGIN_FAILED]: (state: IAuthState) => ({
    ...state,
    isLoggedIn: false,
    token: null,
    username: null,
    password: null,
  }),

  [LOG_OUT]: (state: IAuthState) => ({
    ...state,
    isLoggedIn: false,
    token: null,
    username: null,
    password: null,
  }),
});

export default authReducer;
