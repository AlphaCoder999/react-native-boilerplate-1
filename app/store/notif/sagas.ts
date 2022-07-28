/* Redux saga class
 */
import { put, call, delay } from 'redux-saga/effects';
import { fetchNotifications } from '@services/notif';
import { labels } from '@constants/strings';
import { showSnackMessage } from '@utils/alerts';
import { INotifFetchRequestAction } from '@models/actions/notif';
import {
  disableLoader,
  enableLoader,
  onFetchNotificationSuccess,
  onFetchNotificationFailure,
} from './actions';

function* fetchNotificationsAsync({
  payload: { userToken },
}: INotifFetchRequestAction) {
  try {
    yield put(enableLoader());
    /* NOTE: How to call API */
    // const response = yield call(fetchNotifications, userToken);

    yield delay(2000); /* NOTE: Emulating network latency */

    /* NOTE: Mock API response */
    const response = userToken
      ? {
          success: true,
          data: {
            userToken,
            lastFetchedOn: new Date(),
            list: new Array(Math.floor(Math.random() * 10 + 1)).fill({
              id: 'N00x',
              text: 'This is a dummy notification',
            }),
          },
        }
      : { success: false, data: { error: 'Invalid user token' } };

    if (!response.success) throw new Error(response.data.error);

    yield put(onFetchNotificationSuccess(response.data));
  } catch (error: any) {
    yield put(onFetchNotificationFailure());

    showSnackMessage(
      `${labels.notifFetchFailed}: ${error?.message ?? 'Unknown'}`,
      true,
      true,
    );
  } finally {
    yield put(disableLoader());
  }
}

export { fetchNotificationsAsync };
