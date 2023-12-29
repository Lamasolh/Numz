import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent} from 'react-native';
import Blackbtn from '../HomeComponents/GeneralComponents/Inputs/Button/Blackbtn';
import FreelencerAttachfiles from "./FreelencerDocumentPickers"
const Attachfiles = props => {
 

  return (
    <>

  

        <View style={styles.newcontainer}>

        <Image source={require('../../assets/bigc.png')}/>

        <Image style={{position:"absolute"}} source={require('../../assets/insidebigc.png')}/>
       </View>

       <View style={{}}>

        <Text style={{textAlign:"center", fontWeight:"bold", fontSize:20, color:"#00A081", marginTop:10}}>We would like to know more {"\n"} about your work journey!</Text>
        <Text style={{marginTop:10, textAlign:"center", color:"#00A081"}}>Upload Your CV </Text>
       </View>

       <FreelencerAttachfiles/>
    
    </>



  );
}


const styles = StyleSheet.create({



  newcontainer:{

  

   justifyContent:"center",
   alignItems:"center",
    width:"100%",
    marginTop:20,
    position:"relative",
   
  },


})

export default Attachfiles;