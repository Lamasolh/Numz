
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import Inputwithgreybackground from '../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground';
import BusinessServicesComps6 from '../../Components/BusinessServicesComps/BusinessServicesComps6';
import React, { useState } from 'react';

const BS6 = props => {
  
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>


        <BusinessServicesComps6 title1="Upload Your Resume"  
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


export default BS6;