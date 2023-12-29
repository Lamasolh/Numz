import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent,TextInput} from 'react-native';
import Blackbtn from '../HomeComponents/GeneralComponents/Inputs/Button/Blackbtn';
import TextArea from '../HomeComponents/GeneralComponents/Inputs/TextArea';
const BusinessComp4 = props => {
 

  return (
    <>

  

        <View style={styles.newcontainer}>
        

        <Text style={{color:"black", fontWeight:"bold"}}>As</Text>
            
        
        </View>

        <View style={{marginTop:20}}>

          <Text style={{fontWeight:"bold", fontSize:23}}>{props.title1} {'\n'}{props.title2} </Text>
        </View>


        <View style={{width:"100%"}}>

        <View style={styles.Textinputcontainer}>



            <TextInput multiline = {true}
            numberOfLines = {10} color="black" placeholder={props.placeh}/>

        </View>

        </View>


        
        <View style={{width:"100%"}}>

        <View style={styles.Textinputcontainer}>



            <TextInput multiline = {true}
            numberOfLines = {10} color="black" placeholder={props.placeh2}/>

        </View>

        </View>
    

    <View style={{marginTop:100, justifyContent:"flex-end", width:"100%",alignItems:"flex-end"}}>

    <Image style={{}}source={require('../../assets/cal.png')}/>

    </View>



    <Blackbtn title="Get Started"/>
     
    
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

export default BusinessComp4;