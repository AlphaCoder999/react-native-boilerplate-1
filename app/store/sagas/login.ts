/* Redux saga class
 * logins the user into the app
 */
import { put, call, delay } from 'redux-saga/effects';
import * as loginActions from 'app/store/actions/login';
import { loginUser } from 'app/services/user-auth';
import { labels } from '../../constants/strings';
import { showSnackMessage } from 'app/utils/alerts';
import { ILoginRequestAction } from 'app/models/actions/login';

function* loginAsync({ payload: { username, password } }: ILoginRequestAction) {
  try {
    yield put(loginActions.enableLoader());
    /* How to call API */
    // const response = yield call(loginUser, username, password);

    yield delay(2000); /* Emulating network latency */

    /* Mock API response */
    const response =
      username === 'admin' && password === 'Admin@123'
        ? { success: true, data: { token: 'Xgs3a34uyd234nf6kg' } }
        : { success: false, data: { error: 'Invalid credentials' } };

    if (!response.success) throw new Error(response.data.error);

    yield put(loginActions.onLoginSuccess(response.data));

    showSnackMessage(labels.loginSuccessful);

    /* no need to call navigate as this is handled by redux store with SwitchNavigator */
    // yield call(navigationActions.navigateToHome);
  } catch (error: any) {
    yield put(loginActions.onLoginFailure());

    showSnackMessage(
      `${labels.loginFailed}: ${error?.message ?? 'Unknown'}`,
      true,
      true,
    );
  } finally {
    yield put(loginActions.disableLoader());
  }
}

export { loginAsync };
