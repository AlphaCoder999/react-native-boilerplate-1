import { StyleSheet } from 'react-native';
import AppStyles from 'app/config/styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: AppStyles.styles.screen,
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: hp(2),
  },
  forgot: {
    marginTop: hp(1),
  },
  labelStyle: {
    fontSize: wp(3),
  },
  input: {
    width: '100%',
  },
});

export default styles;
