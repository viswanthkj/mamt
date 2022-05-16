import React from 'react';
import {Button} from 'react-native';

const IntroScreen = ({navigation}) => {
  return (
    <Button
      title="Go to camera"
      onPress={() => navigation.navigate('Camera')}
    />
  );
};

export default IntroScreen;
