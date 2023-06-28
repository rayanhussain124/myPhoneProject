import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function Calories({ navigation }) {
    //useState stores all the data and is used to change and manipulate data
    const [store, setStore] = useState([
        { name: 'Banana', calory: 105, quantity:'1 Medium', key: '1'},
        { name: 'Carrot', calory: 30, quantity:'1', key: '2'},
        { name: 'Egg', calory: 78, quantity:'1 Large', key: '3'},
        { name: 'Bread', calory: 265, quantity:'100 grams', key: '4'},
        { name: 'Rice', calory: 206, quantity:'158 grams', key: '5'},
        { name: 'Tuna', calory: 132, quantity:'100 grams', key: '6'},
        { name: 'Salmon', calory: 208, quantity:'100 grams', key: '7'},
    ]);

    //return function returns JSX code to structure the page
    return (
        <View style={styles.container}>
            <FlatList
              data={store}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('CaloryDetails', item)}>
                  <Text style={styles.item}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
        </View>
    )
    
}

    //create function returns CSS to style the page
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          paddingTop: 40,
          paddingHorizontal: 20,
        },
        item: {
            marginTop: 24,
            padding: 30,
            backgroundColor: 'teal',
            fontSize: 24,
            color: 'white'
        }
      });