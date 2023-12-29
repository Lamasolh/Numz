import React from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import MedicalComponentsSearch from '../../Components/MedicalComponents/MedicalComponentsSearch';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BigButton2 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton2";
import MedicalComponentsCards from '../../Components/MedicalComponents/MedicalComponentsCards';
import MedicalComponentsTopDoctors from '../../Components/MedicalComponents/MedicalComponentsTopDoctors';


const M2 = props => {
   
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="" navigate='MedicalScreens1'/>

        <MedicalComponentsSearch/>
        <View>

          <Text style={{paddingLeft:20,marginTop:20,fontWeight:"bold",fontSize:18}}>Cardiology Doctors </Text>
        </View>


        <MedicalComponentsTopDoctors navigate='MedicalScreens3'  path={require('../../assets/d1.png')} dname="dr. Gilang Segara Bening"
        hospitalname="Heart . Persahabatan Hospital"
        
        />

        
        <MedicalComponentsTopDoctors  path={require('../../assets/d1.png')} dname="dr. Gilang Segara Bening"
        hospitalname="Heart . Persahabatan Hospital"
        
        />

      <MedicalComponentsTopDoctors  path={require('../../assets/d1.png')} dname="dr. Gilang Segara Bening"
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
    container2: {

      padding:10,
      justifyContent:"flex-start",
      alignItems:"center",
      flexDirection:"row",
      marginTop:20,
     
    },
  
    
  
    greytextinput:{
      width:"80%",
      backgroundColor:"lightgrey",
      padding:10,
      borderRadius:23,
   
      
    }
})


export default M2;