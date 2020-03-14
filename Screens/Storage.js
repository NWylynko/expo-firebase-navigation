import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Text } from 'react-native';

import fire from '../firebase'
import Screen from '../Styles/Screen'

export default function Home() {

  const [imageUrl, setImageUrl] = useState()
  const [ImageState, setImageState] = useState()

  function getImage() {
    setImageState("button pressed")
    fire.storage()
      .ref('expo-firebase-navigation/salty.jpg')
      .getDownloadURL()
      .then(setImageUrl)
      .then(() => setImageState("got url of image"))
  }

  return (
    <View style={Screen.page}>
      <Button onPress={getImage} title="Show Image from firebase storage" />
      <Text>ImageState: {ImageState}</Text>
      {imageUrl ? 
      <Image 
        source={{ uri: imageUrl }} 
        style={Styles.image} 
        onLoad={() => setImageState("displaying image")} 
        onError={() => setImageState("failed to load image")} 
        onProgress={(event) => setImageState(event.nativeEvent.loaded / event.nativeEvent.total * 100 + "% loaded")}
        /> : null}
    </View>
  );
}

const Styles = StyleSheet.create({
  image: {
    width: '100%',
    flex: 1
  }
})
