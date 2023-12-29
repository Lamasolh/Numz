import React from 'react';
import { StyleSheet, Text, TextInput, View,Image } from 'react-native';

const SNewInputswithpic = props => {
    return (

        <>
        <View style={{width:"45%"}}>

            <View style={styles.Textinputcontainer}>

          

                <TextInput color="#00A081" placeholder={props.placeh}/>
                <Image style={{position:"absolute", left:"15%", top:"35%"}} source={require('../../../../assets/france.png')}/>
            </View>

            <View style={styles.Textinputcontainer}>



            <TextInput color="#00A081" placeholder={props.placeh}/>
            <Image style={{position:"absolute", left:"15%", top:"35%"}} source={require('../../../../assets/uk.png')}/>
            </View>

        </View>

      
       </>

    );
}

const styles = StyleSheet.create({
    container: {
     
        padding: 20
    },
    Textinputcontainer: {
        borderWidth: 2,
        marginTop:10,
        borderColor: '#E3E5E5',
        borderRadius: 8,
        paddingTop: 10,
        paddingLeft: 5,  height: 55,
        backgroundColor: "#F1F1F1",
        paddingLeft:50,
        position:"relative",
    },
    text: {
        fontSize: 11,

    }
})

export default SNewInputswithpic;