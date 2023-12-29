import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent} from 'react-native';
import Blackbtn from '../HomeComponents/GeneralComponents/Inputs/Button/Blackbtn';
import SmallInputwithpicture from '../HomeComponents/GeneralComponents/Inputs/SmallInputwithpicture';
import SmallinputWithoutTitle from '../HomeComponents/GeneralComponents/Inputs/SmallinputWithoutTitle';
const Flanguages = props => {
 

  return (
    <>

  

        <View style={styles.newcontainer}>
        
          <SmallInputwithpicture/>

          <SmallinputWithoutTitle/>
         

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

export default Flanguages;