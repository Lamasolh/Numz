import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import FreelancerRadioView from "../../Components/FreelencerComponents/FreelancerRadioView";
import BigButton2 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton2";
import TextAreawithcolors from "../../Components/HomeComponents/GeneralComponents/Inputs/TextAreawithcolors";
const Freel9 = props => {
  

  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="Freelancer Registration" navigate='FreelencerScreens8'/>
        <Text style={{fontSize:23, fontWeight:"bold", color:"#00A081", marginTop:20,marginLeft:"3%"}}>Welcome John!</Text>
        <Text style={{fontSize:15,color:"#393939", marginTop:20,marginLeft:"3%"}}>Thank you for joining. To know you further we would like to write a paragraph that show your work experience.</Text>
        <View style={{marginTop:"5%"}}>
        <TextAreawithcolors placeh="Description"/>
        </View>
        <View style={{marginTop:"13%"}}>
        <BigButton2 navigate='FreelencerScreens10' title="Save"/>
        </View>
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


export default Freel9;