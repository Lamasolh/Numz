import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent,TextInput} from 'react-native';
import Blackbtn from '../HomeComponents/GeneralComponents/Inputs/Button/Blackbtn';
import TextAreaNocolors from '../HomeComponents/GeneralComponents/Inputs/TextAreaNocolors';
import InputNoTitle from "../HomeComponents/GeneralComponents/Inputs/InputNoTitle";
import SelectNoTitleWithNoColor from "../HomeComponents/GeneralComponents/Inputs/Selects/SelectNoTitleWithNoColor";
import { RadioButton } from 'react-native-paper';
const BusinessComp8 = props => {
 
    const [checked, setChecked] = React.useState('unchecked');
  return (
    <>

  

        <View style={styles.newcontainer}>
        

        <Text style={{color:"black", fontWeight:"bold"}}>As</Text>
            
        
        </View>

        <InputNoTitle placeh="Title"/>
        <InputNoTitle placeh="Company"/>
        <SelectNoTitleWithNoColor/>

        <View style={{width:"100%", flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:20}}>

               
                
                <RadioButton style={{}}
                value="first"
                color='#00A081'
                uncheckedColor={"#B6B6B6"}
                status={ checked === 'first'? 'checked' : 'unchecked' }
                onPress={() => {setChecked('first'), setshow(false), setshow2(true)}}
            />

             <Text style={{color:"black", marginLeft:"2%"}}>I am currently working in this role</Text>
        </View>

        <InputNoTitle placeh="Start date"/>
        <InputNoTitle placeh="End date"/>
        <TextAreaNocolors placeh="Description"/>


    <Blackbtn title="Save"/>
     
    
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

export default BusinessComp8;