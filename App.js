import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

import ImageViewer from './components/ImageViewer'; 
import Button from './components/Button';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  const pickImageAsync = async ()=> {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: 'true',
      quality: 1,
    });
    if(!result.cancelled){
      console.log(result);
    }
    else{
      alert('You have not choosen any file..!');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label= "Choose a Photo" onPress={pickImageAsync} />
        <Button label= "Use this Photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0EC79B',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center',
  },
});
