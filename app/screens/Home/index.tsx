import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'app/store/actions/login';
import styles from './styles';
import { labels } from '../../constants/strings';
import { IState } from 'app/models/reducers/state';
import useOrientation from '../../hooks/orientation';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const HomeScreen: React.FC = () => {
  const getComputedResponsiveStyles = () => ({
    container: { paddingHorizontal: wp(3), paddingVertical: hp(2) },
  });

  const [responsiveStyles, setResponsiveStyles] = useState(
    getComputedResponsiveStyles(),
  );

  const { token } = useSelector((state: IState) => state.login);

  const { screenOrientation } = useOrientation();

  useEffect(
    () => setResponsiveStyles(getComputedResponsiveStyles()),
    [screenOrientation],
  );

  const dispatch = useDispatch();
  const onLogout = () => dispatch(logOut());

  return (
    <ScrollView
      contentContainerStyle={[styles.container, responsiveStyles.container]}>
      <Text>Token: {token}</Text>
      <Button
        icon="logout"
        uppercase={false}
        mode="outlined"
        onPress={onLogout}>
        {labels.logout}
      </Button>
    </ScrollView>
  );
};

export default HomeScreen;
