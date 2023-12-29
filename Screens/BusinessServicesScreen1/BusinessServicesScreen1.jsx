import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import Inputwithgreybackground from '../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground';
import BusinessServicesComps1 from '../../Components/BusinessServicesComps/BusinessServicesComps1';
const BS1 = props => {

  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>


        <BusinessServicesComps1 title1="Hey Alex." title2="Ready for your next big" title3="apportunity?"
        txt1="Start by answering few questions to" txt2="know about you" txt3="Browse the projects already done and"
        txt4="check freelancers rating" txt5="Get paid safely and get the support of" txt6="our team 24/7"
        txtbottom1="It only takes 5. 10 minutes and you can start with us." txtbottom2="We'll save as you go."/>
        

        
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


export default BS1;