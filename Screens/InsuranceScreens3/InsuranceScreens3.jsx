import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import InsuranceHeader from '../../Components/InsuranceComponents/InsuranceHeader';
import Inputwithgreybackground from '../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BigButton3 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3"
import InsuranceComponents3 from "../../Components/InsuranceComponents/InsuranceComponents3";

const Ins2 = props => {
  
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <InsuranceHeader title="Insurance" navigate=''/>

        <View style={styles.container}>

        <InsuranceComponents3/>
   
       </View>
       <View style={{position:"relative", marginTop:"5%"}}>
        <Image style={{position:"absolute", left:"0%"}} source={require('../../assets/bottomanimationins.png')}/>

        </View>
        <View style={{marginTop:"25%"}}>
        <SMENavbar/>
        </View>

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