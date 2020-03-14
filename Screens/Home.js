import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

import firebase from '../firebase'

export default function Home() {

  const [text, setText] = useState("press the button")

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

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{text}</Text>
      <Button onPress={getText} title="Retrieve something from firebase realtime database"/>
    </View>
  );
}
