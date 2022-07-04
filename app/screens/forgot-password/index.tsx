import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { goBack } from 'app/navigation/navigation-service';
import styles from './styles';
import { labels } from '../../constants/strings';
import useOrientation from '../../hooks/orientation';
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
    <ScrollView
      contentContainerStyle={[styles.container, responsiveStyles.container]}>
      <Button
        icon="keyboard-backspace"
        uppercase={false}
        mode="outlined"
        onPress={goBack}>
        {labels.goBack}
      </Button>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
