import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const App = () => {
  const pickImageHandler = async () => {
    const imageResponse = await launchCamera({}, response => {
      console.log('response', response);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Pick an Image" onPress={pickImageHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
