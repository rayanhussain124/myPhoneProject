import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Header from './components/header';

export default function App() {
  const [name, setName] = useState('rayan');
  const [password, setPassword] = useState('uiop213')

  const clickHandler = () => {
    setName('david');
  }

  return (
    <View style={styles.container}>
      <Header />
      <Text>Enter username</Text>
      <TextInput style={styles.input} />
      <Text>Enter password</Text>
      <TextInput style={styles.input} />
      <View style={styles.header}>
        <Text style={styles.boldText}>Food App</Text>
      </View>
      <View style={styles.body}>
        <Text>Prices</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});