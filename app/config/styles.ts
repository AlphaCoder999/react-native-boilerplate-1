/*
 * Provides universal color configs used in the app.
 * Provides universal fonts used in the app.
 */

import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const AppStyles = {
  colors: {
    COLOR_PRIMARY: '#2ec7ab',
    COLOR_SECONDARY: '#111',
    COLOR_WHITE: '#FFFFFF',
    COLOR_BLACK: '#000000',
    COLOR_GREY: 'grey',
    COLOR_GREEN: 'green',
    COLOR_PLACEHOLDER: '#111111',
    COLOR_GREY_WHITE: '#fafafa',
    COLOR_DARK_SEPERATOR: '#d4d4d4',
    COLOR_BLACK_TRANSP: 'rgba(0, 0, 0, 0.7)',
    COLOR_GREY_TRANSP: 'rgba(67, 85, 85, 0.7)',
    COLOR_INDIAN_RED: 'indianred',
    COLOR_LIGHT_ORANGE: '#ea6823',
  },
  fonts: {
    /* Roboto family */
    ROBOTO_FONT_REGULAR: 'Roboto-Regular',
    ROBOTO_FONT_MEDIUM: 'Roboto-Medium',

    // /* Poppins family */
    // POPPINS: 'Poppins',
    // POPPINS_MEDIUM: 'Poppins-Medium',
    // POPPINS_REGULAR: 'Poppins-Regular',
    // POPPINS_SEMIBOLD: 'Poppins-SemiBold',
    // POPPINS_LIGHT: 'Poppins-Light',
    // POPPINS_BOLD: 'Poppins-Bold',
  },
  styles: StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: wp(10),
      paddingVertical: hp(2),
    },
  }),
};

export default AppStyles;
