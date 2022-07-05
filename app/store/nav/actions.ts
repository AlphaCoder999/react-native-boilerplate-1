import { navigate } from '@navigation/navigation-service';
import { screenNames } from '@constants/strings';

const navigateToHome = (params: any) => {
  navigate(screenNames.home, params);
};

const navigateToForgotPassword = (params?: any) => {
  navigate(screenNames.forgotPassword, params);
};

export { navigateToHome, navigateToForgotPassword };
