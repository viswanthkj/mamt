/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  IntroScreen,
  MainScreen,
  CameraScreen,
  FilePreviewScreen,
  ResultScreen,
} from './src/screens';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Intro"
          component={IntroScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{title: 'MainScreen'}}
        />
        <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{title: 'CameraScreen'}}
        />
        <Stack.Screen
          name="Preview"
          component={FilePreviewScreen}
          options={{title: 'FilePreviewScreen'}}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{title: 'ResultScreen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
