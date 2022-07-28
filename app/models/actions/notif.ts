import { INotifAPIResponse } from '../api/notif';

interface INotifFetchRequestAction {
  type: string;
  payload: {
    userToken: string | null;
  };
}

interface INotifFetchSuccessAction {
  type: string;
  payload: INotifAPIResponse;
}

export type { INotifFetchRequestAction, INotifFetchSuccessAction };
