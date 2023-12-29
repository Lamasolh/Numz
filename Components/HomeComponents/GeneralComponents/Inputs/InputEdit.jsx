import React from 'react';
import { StyleSheet, Text, TextInput, View,Image } from 'react-native';

const NewInputsnobg = props => {
    return (
        <View >

            <View style={styles.Textinputcontainer}>

                <Text style={{ fontSize: 10, marginLeft: 12, color: 'rgba(114, 119, 122, 1)' }} keyboardType={props.type}>{props.label}</Text>

                <TextInput color="#00A081"/>

                <Image style={{position:"absolute", left:"105%", top:"25%"}} source={require('../../../../assets/edit.png')}/>   

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
        borderWidth: 2,
        marginTop: 15,
        borderColor: '#E3E5E5',
        borderRadius: 8,
        paddingLeft: 5,  height: 55,
        backgroundColor:"white",
        position:"relative",
        paddingRight:"15%",
        paddingTop:5
    },
    text: {
        fontSize: 11,

    }
})

export default NewInputsnobg;