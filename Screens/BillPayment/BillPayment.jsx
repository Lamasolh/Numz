import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import BankingComponentsHeader from "../../Components/BankingComponents/BankingComponentsHeader";
import Cardsslidshow from "../../Components/CardsComponents/Cardsslidshow";
import Inputwithgreybackground from "../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground";
import BillPaymentpopup from '../../Components/BillPaymentComps/BillPaymentpopup';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
const BillPayments = props => {

  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

            <BankingComponentsHeader title="Bill Payment"  navigate='PaymentsScreens'/>
            <Cardsslidshow/>
             <Inputwithgreybackground label="Account" />
             <Inputwithgreybackground label="Select Bill" />
             <View style={{marginTop:100}}>
             <BillPaymentpopup confirm="Confirm payment"/>
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


export default BillPayments;