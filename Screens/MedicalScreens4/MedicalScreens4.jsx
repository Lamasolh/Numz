import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import MedicalComponentsSearch from '../../Components/MedicalComponents/MedicalComponentsSearch';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BigButton3 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3";
import MedicalComponentsTimeButtons from '../../Components/MedicalComponents/MedicalComponentsTimeButtons';
import MedicalComponentsProfile from '../../Components/MedicalComponents/MedicalComponentsProfile';


const M4 = props => {
   
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="" navigate='MedicalScreens3'/>

    
        <MedicalComponentsProfile path={require("../../assets/dprofile.png")}/>


        <View>
            <Text style={{textAlign:"center",marginTop:"8%",fontSize:16,fontWeight:"bold"}}>Available Slots</Text>
        </View>

        <MedicalComponentsTimeButtons/>
         </View>
        
        <View style={{paddingLeft:30,paddingRight:30}}>

        <BigButton3 title="Confirm appointment" navigate='MedicalScreens5' />
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


export default M4;