import Snackbar, { SnackbarAction } from 'react-native-snackbar';
import AppStyles from '@config/styles';
import { labels } from '@constants/strings';

const showSnackMessage = (
  message: string,
  isError?: boolean,
  longerDuration?: boolean,
  indefiniteDuration?: boolean,
  action: SnackbarAction = { text: labels.ok, onPress: Snackbar.dismiss },
) =>
  Snackbar.show({
    text: message,
    duration: indefiniteDuration
      ? Snackbar.LENGTH_INDEFINITE
      : longerDuration
      ? Snackbar.LENGTH_LONG
      : Snackbar.LENGTH_SHORT,
    backgroundColor: isError
      ? AppStyles.colors.COLOR_INDIAN_RED
      : AppStyles.colors.COLOR_LIGHT_ORANGE,
    // fontFamily: AppStyles.fonts.POPPINS_MEDIUM,
    action,
  });

export { showSnackMessage };
