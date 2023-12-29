import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import YourLoan from '../../Components/LoanPaySchedComponents/YourLoan';
import LoansCards from '../../Components/LoanPaySchedComponents/LoansCards';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
const LoanP = props => {
   
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="Loans" navigate='LoansScreens'/>
        <YourLoan/>
        <LoansCards loantxt="Car Loan " navigate='LoanPayment' navigate2='Schedpayment'/>
        <LoansCards loantxt="Instant" loantxt2=" Loan" navigate='LoanPayment' navigate2='Schedpayment'/>
        <LoansCards loantxt="Instant" loantxt2=" Loan" navigate='LoanPayment' navigate2='Schedpayment'/>
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