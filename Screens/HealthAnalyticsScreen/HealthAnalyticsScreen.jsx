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
import HealthAnalyticsComp from '../../Components/MedicalComponents/HealthAnalyticsComp';
import HealthAnalyticsComp2 from '../../Components/MedicalComponents/HealthAnalyticsComp2';


const H1 = props => {
   
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>
        <View style={styles.container}>

        <LoansHeader title="Health Analytics" navigate='MedicalScreens2'/>

        <HealthAnalyticsComp/>
        
        <View style={{marginTop:"5%",paddingLeft:"2%"}}>
            <Text style={{fontSize:18, fontWeight:"bold"}}>Health Updates</Text>
        </View>

        <HealthAnalyticsComp2 title="Lab" time="21 minutes ago" test="Tested Negative for Covid"/>
        <HealthAnalyticsComp2 title="Lab" time="21 minutes ago" test="178 Cholesterol (high)"/>
        <HealthAnalyticsComp2 title="Lab" time="21 minutes ago" test="Tested Negative for Covid"/>
        <HealthAnalyticsComp2 title="Lab" time="21 minutes ago" test="178 Cholesterol (high)"/>
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


export default H1;