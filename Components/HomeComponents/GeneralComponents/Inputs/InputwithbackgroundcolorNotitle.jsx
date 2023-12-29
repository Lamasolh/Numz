import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const SNewInputswithout = props => {
    return (
        <View style={{marginTop:"7%"}}>

            <Text style={{fontSize:12, marginLeft:"2%"}}>{props.txtabove}</Text>

            <View style={styles.Textinputcontainer}>

           

                <TextInput color="#00A081" placeholder={props.placeh}/>

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
        borderColor: '#E3E5E5',
        borderRadius: 8,
        paddingTop: 10,
        paddingLeft: 5,  height: 55,
        backgroundColor: "#F1F1F1",
       
    },
    text: {
        fontSize: 11,

    }
})

export default SNewInputswithout;