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
import {SafeAreaView} from 'react-native';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
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
            options={{title: 'KYC Info'}}
          />
          <Stack.Screen
            name="Preview"
            component={FilePreviewScreen}
            options={{title: 'Preview'}}
          />
          <Stack.Screen
            name="Result"
            component={ResultScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
