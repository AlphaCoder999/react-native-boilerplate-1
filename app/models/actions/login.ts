import { ILoginAPIResponse } from '../api/login';

interface ILoginRequestAction {
  type: string;
  payload: {
    username: string;
    password: string;
  };
}

interface ILoginSuccessAction {
  type: string;
  payload: ILoginAPIResponse;
}

export type { ILoginRequestAction, ILoginSuccessAction };
