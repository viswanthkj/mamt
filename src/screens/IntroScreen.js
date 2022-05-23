import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppButton from '../components';

const IntroScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome to daada</Text>
      <Text style={styles.subTitleText}>Start the KYC process</Text>
      <AppButton
        title="start"
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  subTitleText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#000',
    marginTop: 5,
  },
  buttonContainer: {
    marginVertical: 20,
    marginHorizontal: 30,
  },
});
