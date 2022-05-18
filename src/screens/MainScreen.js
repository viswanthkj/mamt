/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import AppButton from '../components';

const MainScreen = ({navigation}) => {
  const [response, setResponse] = React.useState(null);
  const [photoResponse, setPhotoResponse] = React.useState(null);

  const cloudinaryUpload = () => {
    const identity = response?.assets[0];
    const photo = photoResponse?.assets[0];
    const uri = identity.uri;
    const type = identity.type;
    const name = identity.fileName;
    const source = {
      uri,
      type,
      name,
    };
    const uriPhoto = photo.uri;
    const typePhoto = photo.type;
    const namePhoto = photo.fileName;
    const sourcePhoto = {
      uri: uriPhoto,
      type: typePhoto,
      name: namePhoto,
    };
    const photoArray = [];
    photoArray.push(source);
    photoArray.push(sourcePhoto);
    var itemsProcessed = 0;
    photoArray.forEach(photo => {
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
          if (itemsProcessed === photoArray.length) {
            navigation.navigate('Result');
          }
        })
        .catch(err => {
          console.log('viswa-err', err);
        });
    });
  };
  // const result = await launchCamera(options?);
  const onButtonPress = async type => {
    if (type === 1) {
      await launchCamera(
        {
          saveToPhotos: true,
          mediaType: 'photo',
          includeBase64: false,
          cameraType: 'back',
        },
        setResponse,
      );
    } else {
      await launchCamera(
        {
          saveToPhotos: true,
          mediaType: 'photo',
          includeBase64: false,
          cameraType: 'front',
        },
        setPhotoResponse,
      );
    }
  };


  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          padding: 10,
          margin: 10,
          borderWidth: 1,
          borderColor: '#efefef',
          elevation: 1,
        }}>
        <Text style={styles.titleText}>Identity</Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {(response?.assets &&
            response?.assets.map(({uri}) => (
              <View style={styles.image}>
                <TouchableOpacity
                  key={uri}
                  onPress={() =>
                    navigation.navigate('Preview', {fileUri: uri})
                  }>
                  <Image
                    resizeMode="cover"
                    resizeMethod="scale"
                    style={{width: 200, height: 200}}
                    source={{uri: uri}}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onButtonPress(1)}>
                  <Text style={[styles.titleText, {color: 'blue'}]}>
                    Take again
                  </Text>
                </TouchableOpacity>
              </View>
            ))) || (
            <TouchableOpacity onPress={() => onButtonPress(1)}>
              <Text style={styles.titleText}>Upload an Identity</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          padding: 10,
          margin: 10,
          borderWidth: 1,
          borderColor: '#efefef',
          elevation: 1,
        }}>
        <Text style={styles.titleText}>Photo</Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {(photoResponse?.assets &&
            photoResponse?.assets.map(({uri}) => (
              <View style={styles.image}>
                <TouchableOpacity
                  key={uri}
                  onPress={() =>
                    navigation.navigate('Preview', {fileUri: uri})
                  }>
                  <Image
                    resizeMode="cover"
                    resizeMethod="scale"
                    style={{width: 200, height: 200}}
                    source={{uri: uri}}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onButtonPress(2)}>
                  <Text style={[styles.titleText, {color: 'blue'}]}>
                    Take again
                  </Text>
                </TouchableOpacity>
              </View>
            ))) || (
            <TouchableOpacity onPress={() => onButtonPress(2)}>
              <Text style={styles.titleText}>Upload Photo</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <AppButton
        title="upload"
        containerStyle={styles.buttonContainer}
        disabled={response === null || photoResponse === null}
        onPress={cloudinaryUpload}
      />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 20,
    marginHorizontal: 30,
  },
  tinyLogo: {
    width: 130,
    height: 130,
  },
  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    color: '#000',
  },
});
