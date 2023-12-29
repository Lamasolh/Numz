import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import MedicalComponentsSearch from '../../Components/MedicalComponents/MedicalComponentsSearch';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BigButton3 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3";
import MedicalComponentsTimeButtons from '../../Components/MedicalComponents/MedicalComponentsTimeButtons';
import MedicalComponentsAppointment from '../../Components/MedicalComponents/MedicalComponentsAppointment';

const M7 = props => {
   
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="" navigate='MedicalScreens5'/>

       
        </View>
        <View>
        <Text style={{textAlign:"center",fontWeight:"bold",fontSize:16}}>Appointments</Text>
        </View>

      
      
        <MedicalComponentsAppointment/>
     
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


export default M7;