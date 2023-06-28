import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function CaloryDetails({ navigation }) {
    //return function returns JSX code to structure the page
    return (
        <View style={styles.container}>
            <Text style={styles.item}>Name: { navigation.getParam('name')}</Text>
            <Text></Text>
            <Text style={styles.item}>Calories: { navigation.getParam('calory')}</Text>
            <Text></Text>
            <Text style={styles.item}>Quantity: { navigation.getParam('quantity')}</Text>
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
        fontSize: 24,
    }
  });