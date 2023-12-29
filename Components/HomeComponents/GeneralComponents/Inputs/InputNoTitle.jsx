import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const NewInputsnobg2 = props => {
    return (
        <View >

            <View style={styles.Textinputcontainer}>

         

                <TextInput color="#00A081" placeholder={props.placeh}/>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        padding: 20,
       
    },
    Textinputcontainer: {
        borderWidth: 3,
        marginTop: 15,
        borderColor: '#E3E5E5',
        borderRadius: 8,
        paddingTop: 5,
        paddingLeft: 5,  height: 50,
        backgroundColor:"white"
 
    },
    text: {
        fontSize: 11,

    }
})

export default NewInputsnobg2;