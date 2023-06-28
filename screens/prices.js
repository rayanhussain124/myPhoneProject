import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function Prices({ navigation }) {
    //useState stores all the data and is used to change and manipulate data
    const [food, setFood] = useState([
        { name: 'Tomatoes', price1: 'Iceland: £1.19', price2: 'Tesco Expess: £0.85', price3: 'One O One: £2.30', key: '1'},
        { name: 'Carrots', price1: 'Iceland: £0.85', price2: 'Tesco Expess: £0.09', price3: 'One O One: £1.50', key: '2'},
        { name: 'Salmon', price1: 'Iceland: £4.00', price2: 'Tesco Expess: £4.95', price3: 'One O One: £3.75', key: '3'},
        { name: 'Mackerel', price1: 'Iceland: £1.50', price2: 'Tesco Expess: £0.90', price3: 'One O One: £2.00', key: '4'},
        { name: 'Pasta', price1: 'Iceland: £1.50', price2: 'Tesco Expess: £0.80', price3: 'One O One: £1.75', key: '5'},
        { name: 'Basmati Rice', price1: 'Iceland: £2.10', price2: 'Tesco Expess: £3.00', price3: 'One O One: £1.25', key: '6'},
        { name: 'Broccoli', price1: 'Iceland: £2.00', price2: 'Tesco Expess: £0.72', price3: 'One O One: £1.50', key: '7'},
    ]);

    //return function returns JSX code to structure the page
    return (
        <View style={styles.container}>
            <FlatList
              data={food}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('PriceDetails', item)}>
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



