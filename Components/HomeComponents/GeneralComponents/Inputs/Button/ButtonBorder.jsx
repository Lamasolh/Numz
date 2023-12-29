import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Button, TextInput, View, TouchableOpacity } from 'react-native';

const ButtonBorder = props => {
   const navigation=useNavigation();
    return (
        <View >

            <View style={styles.Textinputcontainer}>
       
            <Button title={props.title}  color="#00A081" style={styles.btn}
            onPress={()=>navigation.navigate(props.navigate)} />

 

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
        marginTop: '25%',
        borderColor: "#00A081",
        borderRadius: 48,
        borderWidth:4,
        backgroundColor:'#FFFFFF',
        padding: 8,
    },

    text: {
        fontSize: 11,
    }
})

export default ButtonBorder;