import react from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";

export default function FlatButton({ text, onPress, image }) {
    //return function returns JSX code to structure the page
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, styles.rating]}>
                <Image style={styles.img} source={image}  />
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

//create function returns CSS to style the page
const styles = StyleSheet.create({
    button: {
      padding: 30,
      marginTop: 16,
      borderColor: '#bbb',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 10,
      backgroundColor: 'teal'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 25,
        textAlign: 'center'
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
    },
    img: {
        height: 40,
        width: 40,
        bottom: 4,
        right: 40,
    }
  });

  //images stores all the icons that is linked to the input given
  export const images = {
    ratings: {
        '1': require('../assets/price-icon.png'),
        '2': require('../assets/event-icon.png'),
        '3': require('../assets/wholesale-icon.png'),
        '4': require('../assets/recipe-icon.png'),
        '5': require('../assets/calory-icon.png')
    }
  }