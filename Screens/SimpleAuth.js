import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';

import fire from '../firebase'
import Screen from '../Styles/Screen'

export default function Home() {

  const [logginIn, setlogginIn] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    fire.auth().onAuthStateChanged(function (user) {
      if (user) {
        setlogginIn(true)
        setError()
      } else {
        setlogginIn(false)
      }
      setLoading(false)
    });
  }, [])

  function Login() {
    setLoading(true)
    fire.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(errorHandler);
  }

  function SignUp() {
    setLoading(true)
    fire.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(errorHandler);
  }

  function Loggout() {
    setLoading(true)
    fire.auth().signOut().catch(errorHandler);
  }

  function errorHandler(error) {
    setError(error)
    setLoading(false)
  }

  return (
    <View style={Screen.page}>
      <TextInput
        style={Styles.input}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="email"
      />
      <TextInput
        style={Styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Password"
      />
      <Button onPress={Login} title="login" />
      <Button onPress={SignUp} title="SignUp" />
      <Button onPress={Loggout} title="Loggout" />
      <Text>logginIn: {JSON.stringify(logginIn)}</Text>
      <Text>loading: {JSON.stringify(loading)}</Text>
      <Text>error: {JSON.stringify(error)}</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%'
  }
})