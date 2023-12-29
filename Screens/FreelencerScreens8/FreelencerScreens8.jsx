import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import FreelancerRadioView from "../../Components/FreelencerComponents/FreelancerRadioView";
import BigButton2 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton2";
import InputwithbackgroundcolorNotitle from "../../Components/HomeComponents/GeneralComponents/Inputs/InputwithbackgroundcolorNotitle";
const Freel8 = props => {
  

  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="Freelancer Registration" navigate='FreelencerScreens7'/>
        <Text style={{fontSize:23, fontWeight:"bold", color:"#000000", marginTop:20,marginLeft:"3%"}}>Hourly Rate</Text>
        <InputwithbackgroundcolorNotitle txtabove="Total amount the client will see"/>
        <InputwithbackgroundcolorNotitle txtabove="Fees deducted (20%)"/>
        <InputwithbackgroundcolorNotitle txtabove="The amount you will Receive"/>
        <BigButton2 navigate='FreelencerScreens9' title="Save"/>
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


export default Freel8;