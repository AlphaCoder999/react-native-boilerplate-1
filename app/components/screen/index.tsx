import React from 'react';
import { SafeAreaView, ScrollView, ViewStyle } from 'react-native';
import style from './style';

interface IProps {
  style?: ViewStyle | ViewStyle[];
  children: Element;
}

const Screen: React.FC<IProps> = props => {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={props.style}>
        {props.children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Screen;
