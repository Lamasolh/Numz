import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent} from 'react-native';
import Blackbtn from '../HomeComponents/GeneralComponents/Inputs/Button/Blackbtn';
import LanguageInput from '../HomeComponents/GeneralComponents/Inputs/LanguageInput';
import SelectLanguages from '../HomeComponents/GeneralComponents/Inputs/Selects/SelectLanguages';
const Businessis = props => {
 


  return (
    <>

  

        <View style={styles.newcontainer}>
        
          <LanguageInput/>
          <SelectLanguages/>

        </View>
    </>



  );
}


const styles = StyleSheet.create({



  newcontainer:{


   justifyContent:"space-between",
   alignItems:"center",
   width:"100%",
   flexDirection:"row"
  
   
  },


})

export default Businessis;