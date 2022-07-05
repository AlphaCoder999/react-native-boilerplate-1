/* Redux saga class
 */
import { put, call, delay } from 'redux-saga/effects';
import { loginUser } from '@services/auth';
import { labels } from '@constants/strings';
import { showSnackMessage } from '@utils/alerts';
import { IAuthRequestAction } from '@models/actions/auth';
import {
  disableLoader,
  enableLoader,
  onLoginFailure,
  onLoginSuccess,
} from './actions';

function* loginAsync({ payload: { username, password } }: IAuthRequestAction) {
  try {
    yield put(enableLoader());
    /* How to call API */
    // const response = yield call(loginUser, username, password);

    yield delay(2000); /* Emulating network latency */

    /* Mock API response */
    const response =
      username === 'admin' && password === 'Admin@123'
        ? { success: true, data: { token: 'Xgs3a34uyd234nf6kg' } }
        : { success: false, data: { error: 'Invalid credentials' } };

    if (!response.success) throw new Error(response.data.error);

    yield put(onLoginSuccess(response.data));

    showSnackMessage(labels.loginSuccessful);

    /* no need to call navigate as this is handled by redux store with SwitchNavigator */
    // yield call(navigationActions.navigateToHome);
  } catch (error: any) {
    yield put(onLoginFailure());

    showSnackMessage(
      `${labels.loginFailed}: ${error?.message ?? 'Unknown'}`,
      true,
      true,
    );
  } finally {
    yield put(disableLoader());
  }
}

export { loginAsync };
