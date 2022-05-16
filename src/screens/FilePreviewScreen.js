import React from 'react';
import {Button} from 'react-native';

const FilePreviewScreen = ({navigation}) => {
  return (
    <Button
      title="Go to result"
      onPress={() => navigation.navigate('Result')}
    />
  );
};

export default FilePreviewScreen;
