import React, { useEffect, useState } from 'react';
import { Button, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { labels } from '../../constants/strings';
import { IState } from 'app/models/reducers/state';
import useOrientation from '../../hooks/orientation';
import Screen from 'app/components/screen';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { logOut } from 'app/store/auth/actions';

const HomeScreen: React.FC = () => {
  const getComputedResponsiveStyles = () => ({
    container: { paddingHorizontal: wp(3), paddingVertical: hp(2) },
  });

  const [responsiveStyles, setResponsiveStyles] = useState(
    getComputedResponsiveStyles(),
  );

  const { token } = useSelector((state: IState) => state.auth);

  const { screenOrientation } = useOrientation();

  useEffect(
    () => setResponsiveStyles(getComputedResponsiveStyles()),
    [screenOrientation],
  );

  const dispatch = useDispatch();
  const onLogout = () => dispatch(logOut());

  return (
    <Screen style={[styles.container, responsiveStyles.container]}>
      <Text>Token: {token}</Text>
      <Button
        icon="logout"
        uppercase={false}
        mode="outlined"
        onPress={onLogout}>
        {labels.logout}
      </Button>
    </Screen>
  );
};

export default HomeScreen;
