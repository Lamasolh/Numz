import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const SmallInput = props => {
    return (
        <View style={{width:"40%", marginTop:17}}>

        <View  style={{width:"100%"}}><Text style={{ color: 'rgba(114, 119, 122, 1)', textAlign:"center" }} keyboardType={props.type}>{props.label}</Text></View>
            <View style={styles.Textinputcontainer}>

              

                <TextInput color="#00A081" fontWeight="bold" style={{fontSize:17, textAlign:"center"}}/>

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
        borderWidth: 1,
        marginTop: 2,
        borderColor: '#E3E5E5',
        borderRadius: 15,
        paddingTop: 5,
        elevation:2,
        backgroundColor:"white",
        paddingLeft: 5,  height: 40,
        width:"100%",
    },
    text: {
      
     
        fontSize:20,

    }
})

export default SmallInput;