import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import YourLoan from '../../Components/LoanPaySchedComponents/YourLoan';
import LoanGuideComps from '../../Components/LoanPaySchedComponents/LoanGuideComps';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
const LoanP = props => {
   
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="Loan Guide" navigate='FirstLoan'/>
        <LoanGuideComps title="What is a loan?" txt="Born consectetur adipiscing elit, sed do eiusmod tempor who plays fot Superliga club Victoria GreensLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...."/>
        <LoanGuideComps title="What is the purpose of a loan?" txt="consectetur adipiscing elit, sed do eiusmod tempor who plays fot Superliga club Victoria GreensLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...."/>
        <LoanGuideComps title="How much can we borrow" txt="consectetur adipiscing elit, sed do eiusmod temporwho plays fot Superliga club Victoria GreensLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...."/>
        <LoanGuideComps title="How much can we borrow" txt="Born 8 November 1996, is a professional footballer who plays fot Superliga club Victoria GreensLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...."/>
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


export default LoanP;