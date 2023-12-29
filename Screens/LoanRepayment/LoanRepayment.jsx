import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import InputNoTitle from '../../Components/HomeComponents/GeneralComponents/Inputs/InputNoTitle';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BlueBtn from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BlueBtn";
const LoanRPayment = props => {

  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

      

        <View style={styles.container}>
        <View style={{width:"100%", marginTop:30}}><Text style={{ fontSize:25, fontWeight:"bold"}}>Loan Repayment</Text></View>
        <View style={{width:"100%", marginTop:10}}><Text style={{ fontSize:13, color:"grey"}}>Current Due Amount</Text></View>
        <InputNoTitle placeh="1500 USD"/>
        <View style={{width:"100%", marginTop:10}}><Text style={{ fontSize:13, color:"grey"}}>Repayment Date</Text></View>
        <InputNoTitle placeh="DD/MM/YYYY"/>
        <View style={{width:"100%", marginTop:10}}><Text style={{ fontSize:13, color:"grey"}}>Repayment Amount</Text></View>
        <InputNoTitle placeh="500 USD" />
        <View style={{width:"100%", marginTop:10}}><Text style={{ fontSize:13, color:"grey"}}>Bank Card</Text></View>
        <InputNoTitle placeh="Last 4 digits 0618"/>
       
        <BlueBtn/>
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


export default LoanRPayment;