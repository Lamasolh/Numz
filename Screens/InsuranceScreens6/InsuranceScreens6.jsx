import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import Convert from '../../Components/LoanPaySchedComponents/Convert';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BigButton2 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton2";



const Converts6 = props => {
   
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="" navigate='InsuranceScreens5'/>

        <View>
            <Text style={{color:"#00A081", fontSize:22, fontWeight:"bold"}}>Convert Your Coins.</Text>
        </View>
        
         <Convert/> 

        <BigButton2 title="Covert" navigate='InsuranceScreens5'/>
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