import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const LInput = props => {
    return (
        <View style={{width:"40%"}}>

        <View  style={{width:"100%"}}><Text style={{ color: 'rgba(114, 119, 122, 1)', textAlign:"center" }} keyboardType={props.type}>{props.label}</Text></View>
            <View style={styles.Textinputcontainer}>

              

                <TextInput color="black"  style={{fontSize:17}}/>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
       
        padding: 20
    },
    Textinputcontainer: {
        borderWidth: 1,
   
        borderColor: '#E3E5E5',
        borderRadius: 5,
     
        elevation:2,
        backgroundColor:"white",
        paddingLeft: 5,  height: 50,
        width:"100%",
    },
    text: {
      
     
        fontSize:20,

    }
})

export default LInput;