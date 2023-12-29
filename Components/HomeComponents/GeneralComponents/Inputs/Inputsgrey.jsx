import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Inputss = props => {
    return (
        <View style={{}}>

            <View style={styles.Textinputcontainer}>
                <View style={{backgroundColor:'#F6F6F6'}}>

                <Text style={{ fontSize: 11, marginLeft: 12, color: 'rgba(114, 119, 122, 1)'}} keyboardType={props.type}>{props.label}</Text>

                <TextInput style={{color:'rgba(0, 160, 129, 1)',height:28,paddingLeft:10}} placeholder={props.placeholder} />
                </View>
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
        // paddingTop: 5,
        // paddingLeft: 5,  
        height: 45,
    },
    text: {
        fontSize: 11,

    }
})

export default Inputss;