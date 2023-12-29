import React from 'react';
import { StyleSheet, Text, TextInput, View,Image } from 'react-native';

const NewInputsbg = props => {
    return (
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>

        <Image style={{}}
                            source={props.img}
                        />
            <View style={styles.Textinputcontainer}>
                 
                <Text style={{ fontSize: 12, marginLeft: 12, color: 'rgba(114, 119, 122, 1)' }} keyboardType={props.type}>{props.label}</Text>

                <TextInput style={{marginLeft: 12}} color="#00A081"/>

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
        borderRadius: 10,
        paddingTop: 5,
        paddingLeft: 5,  height: 65,
        backgroundColor: "#F1F1F1",
        width:"85%"
    },
    text: {
        fontSize: 11,

    }
})

export default NewInputsbg;