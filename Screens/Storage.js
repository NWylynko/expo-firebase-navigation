import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

import fire from '../firebase'
import Screen from '../Styles/Screen'

export default function Home() {

  const [imageUrl, setImageUrl] = useState()

  function getImage() {
    fire.storage()
      .ref('expo-firebase-navigation/salty.jpg')
      .getDownloadURL()
      .then(setImageUrl)
  }

  return (
    <View style={Screen.page}>
      <Button onPress={getImage} title="Show Image from firebase storage" />
      {imageUrl ? <Image source={{ uri: imageUrl }} style={Styles.image} /> : null}
    </View>
  );
}

const Styles = StyleSheet.create({
  image: {
    width: '100%',
    flex: 1
  }
})
