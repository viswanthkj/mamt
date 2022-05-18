import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {
  Camera,
  useCameraDevices,
  CameraPermissionStatus,
} from 'react-native-vision-camera';

const CameraScreen = ({navigation}) => {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [microphonePermission, setMicrophonePermission] = useState(null);
  const devices = useCameraDevices();
  const device = devices.back;

  useEffect(() => {
    Camera.getCameraPermissionStatus().then(setCameraPermission);
    Camera.getMicrophonePermissionStatus().then(setMicrophonePermission);
  }, []);

  console.log(
    `Re-rendering Navigator. Camera: ${cameraPermission} | Microphone: ${microphonePermission}`,
  );

  if (device == null) {
    return null;
  }
  return (
    <Camera
      style={StyleSheet.absoluteFill} 
      device={device} 
      isActive={true}
      photo={true}
    />
  );
};

export default CameraScreen;
