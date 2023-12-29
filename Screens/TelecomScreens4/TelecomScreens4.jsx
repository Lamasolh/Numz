import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';

import TelecomComponentsStdOffer5 from '../../Components/TelecomComponents/TelecomComponentsStdOffer5';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BigButton3 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3"
import Inputwithgreybackground from "../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground"

const T4 = props => {
  

  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="" navigate='TelecomScreens3'/>
        
        <TelecomComponentsStdOffer5/>
        </View>

       
        <SMENavbar/>
      
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding:20,
        backgroundColor:"white",
    
      
    }
    ,
  
})


export default T4;