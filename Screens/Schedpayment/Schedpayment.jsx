import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import Inputwithgreybackground from '../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BigButton from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton";
const SPayment = props => {

  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="Schedule Payment" navigate='YourLoans'/>

        <Inputwithgreybackground label="Frequency"/>
        <Inputwithgreybackground label="Repayment Amount"/>
        <View style={{marginTop:200}}>
        <BigButton title="Next"/>
        </View>
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


export default SPayment;