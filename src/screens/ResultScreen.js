/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import DoneLottie from '../lottie/done.json';

const ResultScreen = ({navigation, route}) => {
  const {photos} = route.params;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    var itemsProcessed = 0;
    setLoading(true);
    photos.forEach(photo => {
      const data = new FormData();
      data.append('file', photo);
      data.append('upload_preset', 'lpdkypfh');
      data.append('cloud_name', 'viswa-cloud');
      fetch('https://api.cloudinary.com/v1_1/viswa-cloud/upload', {
        method: 'post',
        mode: 'cors',
        body: data,
      })
        .then(res => res.json())
        .then(data => {
          itemsProcessed++;
          if (itemsProcessed === photos.length) {
            setLoading(false);
            setTimeout(() => {
              navigation.reset({
                index: 0,
                routes: [{name: 'Intro'}],
              });
            }, 5000);
          }
        })
        .catch(err => {
          console.log('viswa-err', err);
        });
    });
  }, [navigation, photos, setLoading]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
      }}>
      {(loading && (
        <Text
          style={{
            fontSize: 20,
            color: '#000',
            fontWeight: 'bold',
          }}>
          Uploading...
        </Text>
      )) || <LottieView source={DoneLottie} autoPlay />}
    </View>
  );
};

export default ResultScreen;
