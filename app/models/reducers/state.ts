import { ILoadingState } from './loading';
import { IAuthState } from './auth';
import { IThemeState } from './theme';

interface IState {
  auth: IAuthState;
  loading: ILoadingState;
  theme: IThemeState;
}

export type { IState };
