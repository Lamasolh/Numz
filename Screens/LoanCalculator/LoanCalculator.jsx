import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import BankSelection from '../../Components/LoanPaySchedComponents/BankSelection';
import LoanReqcards from '../../Components/LoanPaySchedComponents/LoanReqcards';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import LoanReqComps2 from "../../Components/LoanPaySchedComponents/LoanReqComps2";

const LoanC = props => {
   
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="Loan Request" navigate='LoansScreens'/>

        <View style={{marginTop:"10%", marginLeft:"3%"}}>
            <Text style={{fontSize:18,fontWeight:"bold"}}>Choose Loan Type</Text>
        </View>

        <LoanReqcards/>

        <View style={{marginTop:"5%", marginLeft:"3%"}}>
            <Text style={{fontSize:18,fontWeight:"bold"}}>Select Bank</Text>
        </View>
       
        <BankSelection/>

        <LoanReqComps2/>
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


export default LoanC;