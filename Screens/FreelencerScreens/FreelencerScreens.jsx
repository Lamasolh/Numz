import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import Profile from "../../Components/FreelencerComponents/Profile";
import Inputwithgreybackground from "../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground";
import BigButton2 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton2";

const Freel = props => {
   
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="Freelancer Registration" navigate='FreelencerScreens4'/>
        <Profile/>
        <Inputwithgreybackground label="City"/>
        <Inputwithgreybackground label="Address"/>
        <Inputwithgreybackground label="Zip Code"/>
        <Inputwithgreybackground label="Phone Number"/>
       
        <BigButton2 navigate='FreelencerAttachfilesScreens' title="Save"/>
        
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


export default Freel;