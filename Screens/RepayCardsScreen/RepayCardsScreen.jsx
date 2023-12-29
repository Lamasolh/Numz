import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import BankingComponentsHeader from "../../Components/BankingComponents/BankingComponentsHeader";
import Loansslidshow from '../../Components/LoanPaySchedComponents/Loansslidshow';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import RepayCards from '../../Components/LoanPaySchedComponents/RepayCards';
import Services from '../../Components/LoanPaySchedComponents/Services';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";


const Repay = props => {

  return (
    <>


 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>
            <LoansHeader navigate='YourLoans'/>
            <RepayCards  loantxt="Car Loan "/>
            <RepayCards  loantxt="Car Loan "/>
            <RepayCards  loantxt="Car Loan "/>
            
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


export default Repay;