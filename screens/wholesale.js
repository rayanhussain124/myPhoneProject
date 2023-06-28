import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function Wholesale({ navigation }) {
    //useState stores all the data and is used to change and manipulate data
    const [store, setStore] = useState([
        { name: 'Booker', address: '154 Craighall Rd, Glasgow G4 9TD', key: '1'},
        { name: 'Costco', address: 'St. Rollox Business Park, 15 Cobden Rd, Springburn, Glasgow G21 1YX', key: '2'},
        { name: 'Unity Cash And Carry LTD', address: 'Unit 7 & 8, Excelsior Industrial Estate, 85/87 Vermont St, Kinning Park, Glasgow G41 1LU', key: '3'},
        { name: 'Kids Wholesale', address: '664 Eglinton St, Glasgow G5 9RP', key: '4'},
        { name: 'DM Fashion Wholesale', address: '52 Wallace St, Glasgow G5 8DU', key: '5'},
        { name: 'Bonnypack', address: '26 West St, Glasgow G5 8LP', key: '6'},
        { name: 'ABS Scotland ltd', address: '101 Centre St, Glasgow G5 8BU', key: '7'},
    ]);

    //return function returns JSX code to structure the page
    return (
        <View style={styles.container}>
            <FlatList
              data={store}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('WholesaleDetails', item)}>
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