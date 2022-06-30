import { ILoadingState } from './loading';
import { ILoginState } from './login';
import { IThemeState } from './theme';

interface IState {
  login: ILoginState;
  loading: ILoadingState;
  theme: IThemeState;
}

export type { IState };
