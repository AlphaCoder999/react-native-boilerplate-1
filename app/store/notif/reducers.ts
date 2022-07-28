/* Notification Reducer
 * handles notif states in the app
 */
import { createReducer } from '@utils/redux';
import {
  NOTIF_FETCH_REQUEST,
  NOTIF_FETCH_RESPONSE,
  NOTIF_FETCH_ERROR,
} from '@store/notif/action-types';
import { INotifState } from '@models/reducers/notif';
import {
  INotifFetchRequestAction,
  INotifFetchSuccessAction,
} from '@models/actions/notif';

const initialState: INotifState = {
  userToken: null,
  lastFetchedOn: null,
  list: [],
};

export default createReducer(initialState, {
  [NOTIF_FETCH_REQUEST]: (
    state: INotifState,
    { payload: { userToken } }: INotifFetchRequestAction,
  ) => ({
    ...state,
    userToken,
  }),

  [NOTIF_FETCH_RESPONSE]: (
    state: INotifState,
    { payload: { userToken, lastFetchedOn, list } }: INotifFetchSuccessAction,
  ) => ({
    ...state,
    userToken,
    lastFetchedOn,
    list,
  }),

  [NOTIF_FETCH_ERROR]: (state: INotifState) => ({ ...state }),
});
