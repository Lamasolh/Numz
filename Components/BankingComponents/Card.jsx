import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';


const Card = props => {
const navigation=useNavigation()
    return (

        <TouchableOpacity
        onPress={() => 
            navigation.navigate('page3')
        }
        >
        <View style={{ flex: 2, flexDirection: "row", justifyContent: 'space-between', padding: 8 }}>
            <View style={{
                shadowOffset: { width: -2, height: 4 },
                shadowColor: 'rgba(0, 0, 0, 0.25)',
                shadowOpacity: 0.2,
                shadowRadius: 3, flex: 2, padding: 30, borderRadius: 19.9, borderColor: '#D8D8D86B', borderWidth: 2, height: 130
            }}>
                <Text style={{ marginBottom: 10 }}>{props.one}</Text>
                <Text style={{ marginBottom: 10, fontSize: 9, color: 'rgba(124, 124, 124, 1)' }}>{props.two}</Text>
                <Text style={{ fontSize: 29.13, color: 'rgba(0, 160, 129, 1)' }}>{props.three}</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
}
// <View style={{
//     shadowColor: '#000',
//     shadowOffset: {
//         width: 10,
//         height: 2,
//     }, justifyContent: 'left', shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     textAlign: 'left', height: 110, marginTop: 20
// }}>

//         <Text>{props.one}</Text>
//         <Text>{props.two}</Text>
//         <Text>{props.three}</Text>

// </View>

const styles = StyleSheet.create({



    newcontainer: {

        padding: 20,
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "#DFDFDF",

        width: "31%",
        height: 115,
        borderRadius: 15,
        marginLeft: 10,
        marginTop: 20,

    },

    containerchanges: {

        elevation: 10,

    },
    insidecard: {


        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },

    botomcard: {


        justifyContent: "center",
        alignItems: "center",

    }

})

export default Card;