import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    //return function returns JSX code to structure the page
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Food App</Text>
        </View>
    )
}

//create function returns CSS to style the page
const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'teal'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        bottom: 20
    }
});