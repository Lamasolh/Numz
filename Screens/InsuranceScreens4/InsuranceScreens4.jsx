import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import InsuranceHeader from '../../Components/InsuranceComponents/InsuranceHeader';
import Inputwithgreybackground from '../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BigButton3 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3"
import InsuranceList from "../../Components/InsuranceComponents/InsuranceList";

const Ins4 = props => {

  
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <InsuranceHeader title="Insurance" navigate=''/>
        <InsuranceList/>
   
    
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


export default Ins4;