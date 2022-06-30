/**
 *  Redux saga class init
 */
import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST } from '../actions/types';
import { loginAsync } from './login';

function* watch() {
  yield all([takeLatest(LOGIN_REQUEST, loginAsync)]);
}

export default watch;
