import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';

import TelecomComponentsCards4 from '../../Components/TelecomComponents/TelecomComponentsCards4';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BigButton3 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3"
import InputNoTitle from "../../Components/HomeComponents/GeneralComponents/Inputs/InputNoTitle"

const T2 = props => {
  
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="" navigate='TelecomScreens1'/>
        
        <TelecomComponentsCards4/>
        <View style={{paddingLeft:20,paddingRight:20}}>
        <InputNoTitle placeh="My Package"/>
        </View>
        <View style={{paddingLeft:20,paddingRight:20,marginTop:15}}>
        <InputNoTitle placeh="Account Details"/>
        </View>
        <View style={{paddingLeft:20,paddingRight:20,marginTop:15}}>
        <InputNoTitle placeh="Settings"/>
        </View>
        <View style={{paddingLeft:20,paddingRight:20,marginTop:15}}>
        <InputNoTitle placeh="My Package"/>
        </View>
        </View>

        <View style={{paddingLeft:30,paddingRight:30,marginTop:30}}>
            <BigButton3 title="Save" navigate='TelecomScreens1'/>
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