/*
 * Reducer actions related with login
 */
import {
  LOGIN_DISABLE_LOADER,
  LOGIN_ENABLE_LOADER,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  LOG_OUT,
} from './types';
import { ILoginAPIResponse } from 'app/models/api/login';
import {
  ILoginRequestAction,
  ILoginSuccessAction,
} from 'app/models/actions/login';

const requestLogin = (
  username: string,
  password: string,
): ILoginRequestAction => ({
  type: LOGIN_REQUEST,
  payload: { username, password },
});

const onLoginFailure = () => ({
  type: LOGIN_FAILED,
});

const onLoginSuccess = (response: ILoginAPIResponse): ILoginSuccessAction => ({
  type: LOGIN_RESPONSE,
  payload: response,
});

const enableLoader = () => ({
  type: LOGIN_ENABLE_LOADER,
});

const disableLoader = () => ({
  type: LOGIN_DISABLE_LOADER,
});

const logOut = () => ({
  type: LOG_OUT,
});

export {
  requestLogin,
  onLoginFailure,
  onLoginSuccess,
  enableLoader,
  disableLoader,
  logOut,
};
