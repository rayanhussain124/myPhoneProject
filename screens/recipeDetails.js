import React from "react";
import { StyleSheet, View, Text, Button, ScrollView } from "react-native";

export default function RecipeDetails({ navigation }) {
    //return function returns JSX code to structure the page
    return (
        <ScrollView>
           <View style={styles.container}>
            <Text style={styles.item}>Name: { navigation.getParam('name')}</Text>
            <Text></Text>
            <Text style={styles.item}>Ingredients: { navigation.getParam('ingredients')}</Text>
            <Text></Text>
            <Text style={styles.item}>Instructions: { navigation.getParam('instructions')}</Text>
            <Text></Text>
            <Text style={styles.item}>{ navigation.getParam('price3')}</Text>
           </View>
        </ScrollView>
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