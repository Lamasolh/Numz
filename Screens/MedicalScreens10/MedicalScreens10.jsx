import React from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import MHeader2 from '../../Components/MedicalComponents/MHeader2';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BigButton3 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3";
import MedicalComponentsTimeButtons2 from '../../Components/MedicalComponents/MedicalComponentsTimeButtons2';
import MedicalComponentsProfile2 from '../../Components/MedicalComponents/MedicalComponentsProfile2';




const M10 = props => {
   
  return (
    <>

    
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>
        <MHeader2/>
        <MedicalComponentsProfile2 path={require("../../assets/gprofile2.png")}/>


        <View>
            <Text style={{textAlign:"center",marginTop:"8%",fontSize:16,fontWeight:"bold"}}>Available Slots</Text>
        </View>

        <MedicalComponentsTimeButtons2/>
         </View>
        
         <TouchableOpacity style={{paddingLeft:"15%"}}>

            <Text style={{color:"#166FC1E5"}}>SHOW CALENDAR</Text>

        </TouchableOpacity>
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


export default M10;