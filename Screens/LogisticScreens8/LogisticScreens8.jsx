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
import LogTotalBalance from '../../Components/LogisticsComponents/LogTotalBalance';
import LogTotalBalanceCards from '../../Components/LogisticsComponents/LogTotalBalanceCards';



const L8 = props => {

 

  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>
        <View style={styles.container}>

        <LoansHeader title="" navigate='LogisticScreens7'/>

        <LogTotalBalance totalbal="$ 1,701.59"/>
        
        <LogTotalBalanceCards/>
        
        
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


export default L8;