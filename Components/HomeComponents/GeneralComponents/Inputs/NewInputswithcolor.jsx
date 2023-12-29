import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const NewInputs = props => {
    return (
        <View >

            <View style={styles.Textinputcontainer}>

                <Text style={{ fontSize: 11, marginLeft: 12, color: 'rgba(114, 119, 122, 1)' }} keyboardType={props.type}>{props.label}</Text>

                <TextInput color="#00A081"/>

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
        borderRadius: 8,
        paddingTop: 5,
        paddingLeft: 5,  height: 55,
    },
    text: {
        fontSize: 11,

    }
})

export default NewInputs;