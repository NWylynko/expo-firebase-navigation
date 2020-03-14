import React, { useState } from 'react';
import { Text, View, Button, Image } from 'react-native';

import firebase from '../firebase'

export default function Home() {

  const [text, setText] = useState("press the button")
  const [imageUrl, setImageUrl] = useState()

  function getText() {
    firebase.database()
      .ref('expo-firebase-navigation')
      .once('value')
      .then(snapshot => {
      const data = snapshot.val()
      console.log(data)
      setText(data)
    });
  }

  function getImage() {
    firebase.storage()
      .ref('expo-firebase-navigation/salty.jpg')
      .getDownloadURL()
      .then(setImageUrl)
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{text}</Text>
      <Button onPress={getText} title="Retrieve text from firebase realtime database"/>
      <Button onPress={getImage} title="Show Image from firebase storage"/>
      {imageUrl ? <Image source={{ uri: imageUrl }} style={{width: '100%', flex: 1}}/> : null}
    </View>
  );
}
