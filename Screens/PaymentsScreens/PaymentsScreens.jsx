import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import BankingComponentsHeader from "../../Components/BankingComponents/BankingComponentsHeader";
import PaymentsComponents from "../../Components/PaymentsComponents/PaymentsComponents";
import PaymentsComponentsbody from "../../Components/PaymentsComponents/PaymentsComponentsbody";
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
const Payments = props => {

  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

            <BankingComponentsHeader title="Payments"  navigate='Banking'/>
            <PaymentsComponents/>
            <PaymentsComponentsbody/>
          
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


export default Payments;