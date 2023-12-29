import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import TotalBalance from '../../Components/LoanPaySchedComponents/TotalBalance';
import AddnewcardPopup from '../../Components/LoanPaySchedComponents/AddnewcardPopup';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
const Tbalance2 = props => {
   
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <AddnewcardPopup/>
        
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


export default Tbalance2;