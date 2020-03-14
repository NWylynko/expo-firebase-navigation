import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

import fire from '../firebase'
import Screen from '../Styles/Screen'

export default function Home() {

  const [text, setText] = useState("press the button")

  function getText() {
    fire.database()
      .ref('expo-firebase-navigation')
      .once('value')
      .then(snapshot => {
        const data = snapshot.val()
        console.log(data)
        setText(data)
      });
  }

  return (
    <View style={Screen.page}>
      <Text>{text}</Text>
      <Button onPress={getText} title="Retrieve text from firebase realtime database" />
    </View>
  );
}
