import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const RInputs = props => {
    return (
        <View >

    <Text style={{ fontSize: 12, marginLeft: 5, color: 'rgba(114, 119, 122, 1)' }} keyboardType={props.type}>{props.label}</Text>

            <View style={styles.Textinputcontainer}>

            

                <TextInput placeholder={props.placeh} />

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        padding: 20
    },
    Textinputcontainer: {
        borderWidth: 2,
        marginTop: 15,
        borderColor: "#E3E5E5",
      
        paddingTop: 5,
        paddingLeft: 5,  height: 45,
    },
    text: {
        fontSize: 11,

    }
})

export default RInputs;