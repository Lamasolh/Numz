import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Button, TextInput, View, TouchableOpacity } from 'react-native';

const Buttons = props => {
   const navigation=useNavigation();
    return (
        <View >

            <View style={styles.Textinputcontainer}>
       
            <Button title={props.title}  color="rgba(255, 255, 255, 1)" style={styles.btn}
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
        borderColor: "#E3E5E5",
        borderRadius: 48,
        backgroundColor:'rgba(0, 160, 129, 1)',
        padding: 10,
    },

    text: {
        fontSize: 11,
    }
})

export default Buttons;