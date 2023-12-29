
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import Inputwithgreybackground from '../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground';
import BusinessServicesComps9 from '../../Components/BusinessServicesComps/BusinessServicesComps9';
import React, { useState } from 'react';

const BS9 = props => {
  
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>


        <BusinessServicesComps9 title1="Next, add which languages" title2="you know and would you like"
        title3="to work at."
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


export default BS9;