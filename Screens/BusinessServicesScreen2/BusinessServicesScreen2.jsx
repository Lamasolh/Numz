import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import Inputwithgreybackground from '../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground';
import BusinessServicesComps2 from '../../Components/BusinessServicesComps/BusinessServicesComps2';
const BS2 = props => {

  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>


        <BusinessServicesComps2 title1="Few questions below to let us" title2="know you better."
        titlebr="Have you freelanced before?" txt1="Nope it's new to me" txt2="Low experience and need tips"
        txt3="Yes, I've freelanced for years"/>


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


export default BS2;