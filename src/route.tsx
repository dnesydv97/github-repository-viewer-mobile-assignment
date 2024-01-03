import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Screen from './screens';
import navigation from './navigation/navigation';

const {InputScreen, RepositoryListScreen} = Screen;
const Stack = createNativeStackNavigator();

const {navigationRef} = navigation;
const options = {
  headerShown: false,
  gestureEnabled: true,
};

const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="InputScreen"
          options={options}
          component={InputScreen}
        />
        <Stack.Screen
          name="RepositoryListScreen"
          options={options}
          component={RepositoryListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
