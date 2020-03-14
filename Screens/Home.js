import React from 'react';
import { Text, View, Button } from 'react-native';

import firebase from '../firebase'

export default function Home() {

  function getText() {
    firebase.database().ref('data').once('value').then(snapshot => {
      console.log(snapshot)
    });
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button onPress={getText} title="Retrieve something from firebase realtime database"/>
    </View>
  );
}
