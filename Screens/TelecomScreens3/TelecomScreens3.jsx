import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';

import TelecomComponentsRBtns from '../../Components/TelecomComponents/TelecomComponentsRBtns';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BigButton3 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3"
import Inputwithgreybackground from "../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground"

const T2 = props => {
  
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="" navigate='TelecomScreens2'/>
        
        <View style={{padding:20}}>
            <Text style={{color:"#00A081", fontWeight:"bold", fontSize:20}}>Card Details</Text>
            <Inputwithgreybackground label="Card Holder Name"/>
            <Inputwithgreybackground label="Card Number"/>
            <Inputwithgreybackground label="Date Created"/>
            <Inputwithgreybackground label="CVC"/>
            <TelecomComponentsRBtns/>
        </View>
        </View>

        <View style={{paddingLeft:30,paddingRight:30,marginTop:30}}>
            <BigButton3 title="Done" navigate='TelecomScreens2'/>
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


export default T2;