
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import Inputwithgreybackground from '../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground';
import BusinessServicesComps5 from '../../Components/BusinessServicesComps/BusinessServicesComps5';
import React, { useState } from 'react';

const BS5 = props => {
  
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>


        <BusinessServicesComps5 title1="We would like to know more" title2="about your work journey" 
       />
        

        
       </View>


      
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding:30,
        backgroundColor:"white",
      
    }
    ,
  
})


export default BS5;