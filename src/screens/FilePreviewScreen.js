import React from 'react';
import {Image} from 'react-native';

const FilePreviewScreen = ({navigation, route}) => {
  const {fileUri} = route.params;
  return (
    <Image
      resizeMode="cover"
      resizeMethod="scale"
      style={{flex: 1}}
      source={{uri: fileUri}}
    />
  );
};

export default FilePreviewScreen;
