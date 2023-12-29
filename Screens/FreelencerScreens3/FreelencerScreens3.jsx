import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import FreelancerRadioView2 from "../../Components/FreelencerComponents/FreelancerRadioView2";
import FreelancerRegRadio2 from "../../Components/HomeComponents/GeneralComponents/Inputs/FreelancerRegRadio2";
import BigButton2 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton2";
const Freel3 = props => {
   
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="Freelancer Registration" navigate='FreelencerAttachfilesScreens'/>
     
        <Text style={{fontSize:18, fontWeight:"bold", color:"#00A081", marginTop:20,marginLeft:"3%"}}>Few questions below to let us {'\n'} know you better.</Text>
        <Text>{'\n'}</Text>
        <Text style={{fontSize:18, fontWeight:"bold", color:"#00A081",marginLeft:"3%"}}>Have you freelanced before?</Text>
        
        
        <FreelancerRegRadio2 first="Nope, it’s new to me!" sec="Low experience and need tips"
        third="Yes, I have freelanced for years"/>

        <BigButton2 navigate='FreelencerScreens4' title="Next"/>
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


export default Freel3;