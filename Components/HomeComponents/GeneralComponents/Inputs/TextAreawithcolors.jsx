import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const TAreanc2 = props => {
    return (
        <View style={{width:"100%"}}>

            <View style={styles.Textinputcontainer}>

         

                <TextInput multiline = {true}
                numberOfLines = {10} color="black" placeholder={props.placeh}/>

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
        borderWidth: 1,
        marginTop: 15,
        borderRadius: 8,
        borderColor: '#E3E5E5',
        paddingTop: 5,
        paddingLeft: 5,  height: 150,
        backgroundColor:"#E3E5E5"
 
    },
    text: {
        fontSize: 11,

    }
})

export default TAreanc2;