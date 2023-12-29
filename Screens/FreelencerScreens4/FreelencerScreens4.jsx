import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import FreelancerRadioView2 from "../../Components/FreelencerComponents/FreelancerRadioView2";
import FreelancerRegRadio2 from "../../Components/HomeComponents/GeneralComponents/Inputs/FreelancerRegRadio2";
import BigButton2 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton2";
const Freel4 = props => {
   
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="Freelancer Registration" navigate='FreelencerScreens3'/>
     
        <Text style={{fontSize:18, fontWeight:"bold", color:"#00A081", marginTop:20,marginLeft:"3%"}}>What is the main purpose behind {'\n'}entering this freelance?</Text>
    
        
        <FreelancerRegRadio2 first="To earn more income" sec="To get more experience"
        third="Im exploring my talents" />
        <BigButton2 navigate='FreelencerScreens' title="Next"/>
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


export default Freel4;