import { StyleSheet } from 'react-native';
import AppStyles from 'app/config/styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    ...AppStyles.styles.screen,
    justifyContent: 'center',
  },
  inputContainer: {
    paddingBottom: hp(2),
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotButton: {
    marginTop: hp(1),
  },
  label: {
    fontSize: wp(3),
  },
});

export default styles;
