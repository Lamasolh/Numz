import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent,TextInput} from 'react-native';
import Blackbtn from '../HomeComponents/GeneralComponents/Inputs/Button/Blackbtn';
import DocumentPickers from './DocumentPickers';

const BusinessComp5 = props => {
 


  return (
    <>

  

        <View style={styles.newcontainer}>
        

        <Text style={{color:"black", fontWeight:"bold"}}>As</Text>
            
        
        </View>

        <View style={{marginTop:20}}>

          <Text style={{fontWeight:"bold", fontSize:23}}>{props.title1} {'\n'}{props.title2} </Text>
        </View>

        <View style={{marginTop:40}}>

        <Text style={{}}>Use a pdf, word and make sure it's less {'\n'}than 10MB</Text>
        </View>

        <DocumentPickers/>
    
    <View style={{marginTop:60}}>
    <Blackbtn title="Continue"/>
     
    </View>

   
    </>



  );
}


const styles = StyleSheet.create({

    Textinputcontainer: {
        borderWidth: 2,
        marginTop: 15,
        borderColor:"lightgrey",
        borderRadius:5,
        paddingTop: 5,
        paddingLeft: 5,  height: 120,
        backgroundColor:"white"
 
    },
    text: {
        fontSize: 11,

    },

  newcontainer:{

    padding:5,
    backgroundColor:"lightgrey",
    borderWidth:3,
    borderColor:"grey",
   justifyContent:"center",
   alignItems:"center",
    width:"15%",
    height:53,
    borderRadius:30,
    marginTop:20,
   
  },


})

export default BusinessComp5;