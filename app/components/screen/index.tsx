import React from 'react';
import { SafeAreaView, ScrollView, ViewStyle } from 'react-native';
import styles from './styles';

interface IProps {
  style?: ViewStyle | ViewStyle[];
  children: Element;
}

const Screen: React.FC<IProps> = props => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={props.style}>
        {props.children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Screen;
