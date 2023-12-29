import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BankingComponentsHeader from "../../Components/BankingComponents/BankingComponentsHeader";
import Entertainmentsearch from '../../Components/EntertainmentComponents/Entertainmentsearch';
import EntertainmentCards from '../../Components/EntertainmentComponents/EntertainmentCards';
import EntertainmentCards2 from '../../Components/EntertainmentComponents/EntertainmentCards2';
import EntertainmentCards3 from '../../Components/EntertainmentComponents/EntertainmentCards3';

const Ent1 = props => {
   
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>
        <View style={styles.container}>

        <BankingComponentsHeader title="" navigate='Home'/>
        <Entertainmentsearch/>
        <View style={{marginTop:"3%",paddingLeft:"2%"}}>
            <Text style={{fontWeight:"bold",fontSize:15}}>Choose what to book</Text>
        </View>

        <EntertainmentCards/>

        <View style={{marginTop:"3%",paddingLeft:"2%"}}>
            <Text style={{fontWeight:"bold",fontSize:15}}>Popular Bookings</Text>
        </View>

        <EntertainmentCards2/>

        <View style={{marginTop:"3%",paddingLeft:"2%"}}>
            <Text style={{fontWeight:"bold",fontSize:15}}>Popular Bookings</Text>
        </View>

        <EntertainmentCards3/>

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


export default Ent1;