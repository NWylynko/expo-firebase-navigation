import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';

import fire from '../firebase'

export default function Home() {

  const [imageUrl, setImageUrl] = useState()

  function getImage() {
    fire.storage()
      .ref('expo-firebase-navigation/salty.jpg')
      .getDownloadURL()
      .then(setImageUrl)
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={getImage} title="Show Image from firebase storage" />
      {imageUrl ? <Image source={{ uri: imageUrl }} style={{ width: '100%', flex: 1 }} /> : null}
    </View>
  );
}
