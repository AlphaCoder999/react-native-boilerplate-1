/**
 *  Redux saga class init
 */
import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST } from './auth/action-types';
import { loginAsync } from './auth/sagas';

function* rootSagas() {
  yield all([takeLatest(LOGIN_REQUEST, loginAsync)]);
}

export default rootSagas;
