import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import Inputwithgreybackground from '../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BigButton3 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3"


const Ins2 = props => {
  
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="Cybersecurity Insurance" navigate='InsuranceScreens1'/>
        
        <Inputwithgreybackground label="First Name"/>
        <Inputwithgreybackground label="Middle Name"/>
        <Inputwithgreybackground label="Last Name"/>
        <Inputwithgreybackground label="Email"/>
        <Inputwithgreybackground label="Phone Number"/>
        <Inputwithgreybackground label="Date of Birth"/>
        <Inputwithgreybackground label="Nationality"/>
     
        <View style={{marginTop:"10%", justifyContent:"center", alignItems:"center", flexDirection:"row"}}>
            <Text style={{color:"#AEAEB3"}}>Total Balance</Text>
            <Text style={{marginLeft:"3%", fontWeight:"bold", color:"#00A081", fontSize:18}}>$ 1,701.59</Text>
        </View>
        
        <BigButton3 title="Next" navigate='InsuranceScreens5'/>
       </View>


        <SMENavbar/>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding:20,
        backgroundColor:"white",
    
      
    }
    ,
  
})


export default Ins2;