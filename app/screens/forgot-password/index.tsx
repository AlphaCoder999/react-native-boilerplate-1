import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { goBack } from 'app/navigation/navigation-service';
import styles from './styles';
import { labels } from '../../constants/strings';

const ForgotPasswordScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
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
