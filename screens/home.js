import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Image } from 'react-native';
import Header from '../components/header';
import TodoItem from '../components/todoItem';
import FlatButton, { images } from '../components/button';

export default function Home({ navigation }) {
  //useState stores all the data and is used to change and manipulate data
  const [todos, setTodos] = useState([
    { text: 'Prices', key: '1' },
    { text: 'Events', key: '2' },
    { text: 'Wholesale', key: '3' }
  ]);

  //pressHandler is responsible for navigating to the correct page if pressed
  const pressHandler = () => {
    navigation.navigate('Prices')
  }

  //pressHandler2 is responsible for navigating to the correct page if pressed
  const pressHandler2 = () => {
    navigation.navigate('Events')
  }

  //pressHandler3 is responsible for navigating to the correct page if pressed
  const pressHandler3 = () => {
    navigation.navigate('Calories')
  }

  //pressHandler4 is responsible for navigating to the correct page if pressed
  const pressHandler4 = () => {
    navigation.navigate('Wholesale')
  }

  //pressHandler5 is responsible for navigating to the correct page if pressed
  const pressHandler5 = () => {
    navigation.navigate('Recipe')
  }

  //return function returns JSX code to structure the page
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* to do list */}
        <View style={styles.list}>
          <FlatButton text='Prices' onPress={pressHandler} image={images.ratings[1]}/>
          <FlatButton text='Events' onPress={pressHandler2} image={images.ratings[2]}/>
          <FlatButton text='Calories' onPress={pressHandler3} image={images.ratings[5]}/>
          <FlatButton text='Wholesale' onPress={pressHandler4} image={images.ratings[3]}/>
          <FlatButton text='Recipe' onPress={pressHandler5} image={images.ratings[4]}/>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

//create function returns CSS to style the page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10
  },
});
