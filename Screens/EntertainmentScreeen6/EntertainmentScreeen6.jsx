import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import Convert from '../../Components/LoanPaySchedComponents/Convert';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BigButton2 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton2";
import ENConvert from "../../Components/EntertainmentComponents/ENConvert";



const Converts6 = props => {
   
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="" navigate='EntertainmentScreeen5'/>

        <View>
            <Text style={{color:"#00A081", fontSize:22, fontWeight:"bold"}}>Convert Your Coins.</Text>
        </View>
        
         <ENConvert/> 

        <BigButton2 title="Covert" navigate='EntertainmentScreeen5'/>
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


export default Converts6;