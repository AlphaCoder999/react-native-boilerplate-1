import React from 'react';
import { ScrollView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'app/store/actions/login';
import styles from './styles';
import { labels } from '../../constants/strings';
import { IState } from 'app/models/reducers/state';

const HomeScreen: React.FC = () => {
  const { token } = useSelector((state: IState) => state.login);

  const dispatch = useDispatch();
  const onLogout = () => dispatch(logOut());

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
