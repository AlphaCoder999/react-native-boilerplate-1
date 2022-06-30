import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

// NavigationContainer is referred here - Check NavigationStack
const navigationRef = React.createRef<NavigationContainerRef>();

const navigate = (name: string, params?: any) => {
  navigationRef.current?.navigate(name, params);
};

const goBack = () => {
  navigationRef.current?.goBack();
};

export { navigationRef, navigate, goBack };
