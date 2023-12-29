import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import InputNoTitleWithColor from '../../Components/HomeComponents/GeneralComponents/Inputs/InputNoTitleWithColor';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import SelectNoTitleWithColor from '../../Components/HomeComponents/GeneralComponents/Inputs/Selects/SelectNoTitleWithColor';
import TextArea from '../../Components/HomeComponents/GeneralComponents/Inputs/TextArea';

import BlueBtn from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BlueBtn";
const Sendreqblue = props => {

  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

      

        <View style={styles.container}>

        <View style={{width:"100%", marginTop:30}}><Text style={{ fontSize:25, fontWeight:"bold"}}>Loan Request</Text></View>


        <View style={{width:"100%", marginTop:10, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
        <Text style={{fontWeight:"bold", fontSize:15}}>Request Amount</Text>
        <InputNoTitleWithColor placeh="Amount"/>
        </View>

        <View style={{width:"100%", marginTop:10, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
        <Text style={{fontWeight:"bold", fontSize:15}}>Needs Before</Text>
        <InputNoTitleWithColor placeh="DD/MM/YYYY"/>
        </View>
       

        <View style={{width:"100%", marginTop:10, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
        <Text style={{fontWeight:"bold", fontSize:15}}>Loan Type</Text>
        <SelectNoTitleWithColor label="Select Loan Type"/>
        </View>

        <View style={{width:"100%", marginTop:10, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
        <Text style={{fontWeight:"bold", fontSize:15}}>Select Bank</Text>
        <SelectNoTitleWithColor label="Select Bank"/>
        </View>

        
        <Text style={{fontWeight:"bold", fontSize:15, marginTop:20}}>Description</Text>
        < TextArea placeh="Free Text" label="Select Bank"/>
    

       
        <View style={{marginTop:"20%"}}>
        <BlueBtn title="Send Request"/>
        </View>
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


export default Sendreqblue;