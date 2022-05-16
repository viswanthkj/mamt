import React from 'react';
import {Button} from 'react-native';

const CameraScreen = ({navigation}) => {
  return (
    <Button
      title="Go to preview"
      onPress={() => navigation.navigate('Preview')}
    />
  );
};

export default CameraScreen;
