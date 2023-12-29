import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import FreeAddLanguages from "../../Components/FreelencerComponents/FreeAddLanguages";
import Inputwithgreybackground from "../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground";
import Selectwithgreybackground from "../../Components/HomeComponents/GeneralComponents/Inputs/Selects/Selectwithgreybackground";
import SmallInputswithTitle from "../../Components/HomeComponents/GeneralComponents/Inputs/SmallInputswithTitle";
import TextAreawithcolors from "../../Components/HomeComponents/GeneralComponents/Inputs/TextAreawithcolors";
import BigButton2 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton2";
const Freel6 = props => {
  
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="Freelancer Registration" navigate='FreelencerScreens5'/>
        <Text style={{fontSize:23, fontWeight:"bold", color:"#000000", marginTop:20,marginLeft:"3%"}}>Work Languages</Text>
       <FreeAddLanguages/>
        <BigButton2 navigate='FreelencerScreens7' title="Save"/>
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


export default Freel6;