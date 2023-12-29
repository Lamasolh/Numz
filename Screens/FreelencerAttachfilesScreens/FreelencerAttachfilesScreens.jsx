import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import FreelencerAttachfiles from "../../Components/FreelencerComponents/FreelencerAttachfiles";
import Inputwithgreybackground from "../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground";
import BigButton2 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton2";
const Freel = props => {
    const [checked, setChecked] = React.useState('unchecked');
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="Freelancer Registration" navigate='FreelencerScreens'/>
     
        <FreelencerAttachfiles/>
        <BigButton2 navigate='FreelencerScreens2' title="Next"/>
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