import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AddEvent from '../components/addEvent';

export default function Events() {
    //useState stores all the data and is used to change and manipulate data
    const [event, setEvent] = useState([
        { name: 'Eid Festival', date: '28/06/23', key: '1'},
        { name: 'Diwali', date: '12/11/23', key: '2'},
        { name: 'Christmas', date: '25/12/23', key: '3'},
        { name: 'Holi', date: '08/03/23', key: '4'},
        { name: 'Chinese New Year', date: '10/03/24', key: '5'},
        { name: 'Sunday Picnic', date: '15/06/23', key: '6'},
        { name: 'Birthday Party', date: '23/02/24', key: '7'},
    ]);

    //submitHandler is responsible for changing the list with the added item
    const submitHandler = (name, date) => {
      setEvent((prevEvent) => {
        return [
          { name: name, date, key: Math.random().toString() },
          ...prevEvent
        ]
      })
    }

    //return function returns JSX code to structure the page
    return (
        <View style={styles.container}>
          <AddEvent submitHandler={submitHandler} />
            <FlatList
              data={event}
              renderItem={({ item }) => (
                <Text style={styles.item}>{item.name} {item.date}</Text>
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