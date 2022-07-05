import { IAuthAPIResponse } from '@models/api/auth';

interface IAuthRequestAction {
  type: string;
  payload: {
    username: string;
    password: string;
  };
}

interface IAuthSuccessAction {
  type: string;
  payload: IAuthAPIResponse;
}

export type { IAuthRequestAction, IAuthSuccessAction };
