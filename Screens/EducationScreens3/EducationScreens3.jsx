import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import EducationComponents from "../../Components/EducationComponents/EducationComponents";
import InsuranceHeader from '../../Components/InsuranceComponents/InsuranceHeader';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import EducationPopup from "../../Components/EducationComponents/EducationPopup";
import EducationComponents3 from "../../Components/EducationComponents/EducationComponents3";
import EducationComponents4 from "../../Components/EducationComponents/EducationComponents4";
import EduButtonsComponents from "../../Components/EducationComponents/EduButtonsComponents";
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
const Education3 = props => {
   
  return (
    <>
    <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="Education" navigate='EducationScreens2'/>

        <EduButtonsComponents/>
        </View>
      
        </ScrollView>

        <View style={{backgroundColor:"white"}}>
        <SMENavbar/>
        </View>
    
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding:10,
        backgroundColor:"white",
       
      
    }
    ,
  
})


export default Education3;