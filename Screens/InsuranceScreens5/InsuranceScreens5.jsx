import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import InsuranceTotalBalance from '../../Components/InsuranceComponents/InsuranceTotalBalance';
import InsTotalBalanceCards from '../../Components/InsuranceComponents/InsTotalBalanceCards';


const Tbalanceins = props => {
   
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="" navigate='InsuranceScreens2'/>
        <InsuranceTotalBalance totalbal="$ 1,701.59"/>
        <InsTotalBalanceCards/>
        
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


export default Tbalanceins;