import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import TelecomComponents7Cards from '../../Components/TelecomComponents/TelecomComponents7Cards';
import TelecomHeader from '../../Components/TelecomComponents/TelecomHeader';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';


const Tele7 = props => {
   
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>
        <View style={styles.container}>

        <TelecomHeader title="" navigate='TelecomScreens6'/>

        <TelecomComponents7Cards/>
        
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


export default Tele7;