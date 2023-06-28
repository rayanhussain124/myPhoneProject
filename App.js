import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Home from './screens/home';
import Navigator from './routes/homeStack';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Prices', key: '1' },
    { text: 'Events', key: '2' },
    { text: 'Wholesale', key: '3' }
  ]);

  return (
    <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
