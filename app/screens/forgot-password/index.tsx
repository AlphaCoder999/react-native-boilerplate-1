import React, { useEffect, useState } from 'react';
import { Button } from 'react-native-paper';
import { goBack } from 'app/navigation/navigation-service';
import styles from './styles';
import { labels } from '../../constants/strings';
import useOrientation from '../../hooks/orientation';
import Screen from 'app/components/screen';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const ForgotPasswordScreen: React.FC = () => {
  const getComputedResponsiveStyles = () => ({
    container: { paddingHorizontal: wp(3), paddingVertical: hp(2) },
  });

  const [responsiveStyles, setResponsiveStyles] = useState(
    getComputedResponsiveStyles(),
  );

  const { screenOrientation } = useOrientation();

  useEffect(
    () => setResponsiveStyles(getComputedResponsiveStyles()),
    [screenOrientation],
  );

  return (
    <Screen style={[styles.container, responsiveStyles.container]}>
      <Button
        icon="keyboard-backspace"
        uppercase={false}
        mode="outlined"
        onPress={goBack}>
        {labels.goBack}
      </Button>
    </Screen>
  );
};

export default ForgotPasswordScreen;
