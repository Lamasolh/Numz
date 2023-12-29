import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import BankingComponentsHeader from "../../Components/BankingComponents/BankingComponentsHeader";
import Cardsslidshow from "../../Components/CardsComponents/Cardsslidshow";
import Inputwithgreybackground from "../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground";
import BillPaymentpopup from '../../Components/BillPaymentComps/BillPaymentpopup';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import Selectwithgreybackground from "../../Components/HomeComponents/GeneralComponents/Inputs/Selects/Selectwithgreybackground";

import NewCalendarInput from "../../Components/HomeComponents/GeneralComponents/Inputs/NewCalendarInput";
const BillPayments = props => {

  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

            <BankingComponentsHeader title="Schedule Payment"  navigate='PaymentsScreens'/>

            <View style={{marginTop:30, marginBottom:30}} >
            <Text style={{color:"#00A081"}}>Lorem Ipsolem Lorem Ipsolem Lorem Ipsolem Lorem Ipsolem </Text>
            </View>

        <Inputwithgreybackground label="Select Bill"/>
        <Selectwithgreybackground label="Frequenecy"/>

        <NewCalendarInput label="Date of Payment"/>

        <Inputwithgreybackground label="Bill Amount"/>
        <Inputwithgreybackground label="Bank Card"/>

        <View style={{marginTop:100}}>
             <BillPaymentpopup confirm="Submit"/>
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