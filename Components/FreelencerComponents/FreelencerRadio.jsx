import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent} from 'react-native';
import Blackbtn from '../HomeComponents/GeneralComponents/Inputs/Button/Blackbtn';
import FreelancerRadioView from "./FreelancerRadioView"
import FreelancerRegRadio from "../../Components/HomeComponents/GeneralComponents/Inputs/FreelancerRegRadio";
const Attachfiles = props => {
 


  return (
    <>

  

        <View style={styles.newcontainer}>

        <Text style={{marginLeft:"5%", color:"#393939"}}>

        Select the field that you are expert at to {'\n'}make sure we filter the projects that {'\n'}best match your profile.

        </Text>

        </View>
       <FreelancerRegRadio/>
    </>



  );
}


const styles = StyleSheet.create({



  newcontainer:{

  

   justifyContent:"center",
   alignItems:"flex-start",
    width:"100%",
    marginTop:20,

   
  },


})

export default Attachfiles;