import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddEvent({ submitHandler }) {
    //useState stores all the data and is used to change and manipulate data
    const [text, setText] = useState('');

    //changeHandler sets the text to the value given 
    const changeHandler = (val) => {
        setText(val);
    }

    //return function returns JSX code to structure the page
    return (
        <View>
            <TextInput
               style={styles.input} 
               placeholder='new event...'
               onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='add event' color='teal' />
        </View>
    )
}

//create function returns CSS to style the page
const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        fontSize: 24
    }
})