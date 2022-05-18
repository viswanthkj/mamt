import React from 'react';
import {Image} from 'react-native';

const FilePreviewScreen = ({navigation, route}) => {
  console.log('viswa-fileUri', route);
  const {fileUri} = route.params;
  console.log(fileUri);
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
