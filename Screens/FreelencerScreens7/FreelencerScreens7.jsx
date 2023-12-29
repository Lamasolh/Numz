import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import FreelancerRadioView from "../../Components/FreelencerComponents/FreelancerRadioView";
import FreelancerRegRadio3 from "../../Components/HomeComponents/GeneralComponents/Inputs/FreelancerRegRadio3";
import BigButton2 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton2";
const Freel7 = props => {
  
  return (
    <>


 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="Freelancer Registration" navigate='FreelencerScreens6'/>
        <Text style={{fontSize:23, fontWeight:"bold", color:"#000000", marginTop:20,marginLeft:"3%"}}>Skills</Text>

        <FreelancerRegRadio3 first="Administrative Assistance" sec="Customer Service"
        third="Business Analytics" forth="Project Management"/>
        <BigButton2 navigate='FreelencerScreens8' title="Save"/>
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


export default Freel7;