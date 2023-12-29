import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BankingComponentsHeader from "../../Components/BankingComponents/BankingComponentsHeader";
import Entertainmentsearch from '../../Components/EntertainmentComponents/Entertainmentsearch';
import FlightsCards from '../../Components/EntertainmentComponents/FlightsCards';
import EntertainmentCards2 from '../../Components/EntertainmentComponents/EntertainmentCards2';
import EntertainmentCards3 from '../../Components/EntertainmentComponents/EntertainmentCards3';

const Ent3 = props => {
   
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>
        <View style={styles.container}>

        <BankingComponentsHeader title="" navigate='EntertainmentScreeen2'/>
        <Entertainmentsearch/>
        <FlightsCards/>
        </View>
       
        <SMENavbar/>

      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding:30,
        backgroundColor:"white",
      
    }
    ,
  
})


export default Ent3;