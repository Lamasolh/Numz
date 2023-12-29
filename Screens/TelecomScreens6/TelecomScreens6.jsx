import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import TelecomComponents6Search from '../../Components/TelecomComponents/TelecomComponents6Search';
import TelecomComponents6Cards from '../../Components/TelecomComponents/TelecomComponents6Cards';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';

const Tele6 = props => {
   

  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>
        <View style={styles.container}>

        <LoansHeader title="" navigate='TelecomScreens1'/>

        <TelecomComponents6Search/>
        
        <TelecomComponents6Cards/>
        
       </View>

        <SMENavbar/>
   
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


export default Tele6;