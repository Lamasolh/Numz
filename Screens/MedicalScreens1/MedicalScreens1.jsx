import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import MedicalComponentsSearch from '../../Components/MedicalComponents/MedicalComponentsSearch';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BigButton2 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton2";
import MedicalComponentsCards from '../../Components/MedicalComponents/MedicalComponentsCards';
import MedicalComponentsTopDoctors from '../../Components/MedicalComponents/MedicalComponentsTopDoctors';


const M1 = props => {
  console.ignoredYellowBox = ['Sending `onAnimatedValueUpdate` with no listeners registered.'];
   
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="" navigate='EducationScreens7'/>

        <MedicalComponentsSearch/>
        <View>

          <Text style={{paddingLeft:20,marginTop:20,fontWeight:"bold",fontSize:18}}>Specialties</Text>
        </View>
        <MedicalComponentsCards/>

        <View>

        <Text style={{paddingLeft:20,marginTop:50,fontWeight:"bold",fontSize:18}}>Top Doctors </Text>
        </View>


        <MedicalComponentsTopDoctors navigate='MedicalScreens3'   path={require('../../assets/d1.png')} dname="dr. Gilang Segara Bening"
        hospitalname="Heart . Persahabatan Hospital"
        
        />

        
        <MedicalComponentsTopDoctors  path={require('../../assets/d1.png')} dname="dr. Gilang Segara Bening"
        hospitalname="Heart . Persahabatan Hospital"
        
        />

      <MedicalComponentsTopDoctors  path={require('../../assets/d1.png')} dname="dr. Gilang Segara Bening"
        hospitalname="Heart . Persahabatan Hospital"
        
        />
      
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


export default M1;