
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import Inputwithgreybackground from '../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground';
import BusinessServicesComps4 from '../../Components/BusinessServicesComps/BusinessServicesComps4';
import React, { useState } from 'react';

const BS3 = props => {
  
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>


        <BusinessServicesComps4 title1="And how would you like to" title2="work with us?" 
        placeh="I'd like to find my own opportunities" placeh2="Search for Freelancers and work on projects"/>
        

        
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


export default BS3;