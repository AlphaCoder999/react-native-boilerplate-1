import { ViewStyle, TextStyle } from 'react-native';

interface IResponsiveStyles {
  container: ViewStyle;
  inputContainer: ViewStyle;
  forgotButton: ViewStyle;
  buttonText: TextStyle;
  linkButtonText: TextStyle;
}

interface IState {
  username: string;
  password: string;
  hidePassword: boolean;
  responsiveStyles: IResponsiveStyles;
}

type ActionType =
  | 'SET_USERNAME'
  | 'SET_PASSWORD'
  | 'SET_HIDE_PASSWORD'
  | 'UPDATE_RESPONSIVE_STYLES';

interface IAction {
  type: ActionType;
  payload: any;
}

export type { IState, IResponsiveStyles, IAction };
