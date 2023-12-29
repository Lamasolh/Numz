import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import EducationComponents from "../../Components/EducationComponents/EducationComponents";
import InsuranceHeader from '../../Components/InsuranceComponents/InsuranceHeader';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import EducationPopup from "../../Components/EducationComponents/EducationPopup";
import EducationComponents3 from "../../Components/EducationComponents/EducationComponents3";
import EducationComponents4 from "../../Components/EducationComponents/EducationComponents4";
import EducationComponentsCards from "../../Components/EducationComponents/EducationComponentsCards";
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import EDTotalBalance from '../../Components/EducationComponents/EDTotalBalance';
import EDsTotalBalanceCards from '../../Components/EducationComponents/EDsTotalBalanceCards';
const Education4 = props => {
   
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>
        <View style={styles.container}>

        <LoansHeader title="" navigate='EducationScreens3'/>

        <EDTotalBalance totalbal="$ 1,701.59"/>
        
        <EDsTotalBalanceCards/>
        
        
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


export default Education4;