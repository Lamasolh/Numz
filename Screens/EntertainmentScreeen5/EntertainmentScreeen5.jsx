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
import ENTotalBalance from '../../Components/EntertainmentComponents/ENTotalBalance';
import ENTotalBalanceCards from '../../Components/EntertainmentComponents/ENTotalBalanceCards';



const EN5 = props => {

 

  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>
        <View style={styles.container}>

        <LoansHeader title="" navigate='EntertainmentScreeen4'/>

        <ENTotalBalance totalbal="$ 1,701.59"/>
        
        <ENTotalBalanceCards/>
        
        
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


export default EN5;