import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import InsuranceHeader from '../../Components/InsuranceComponents/InsuranceHeader';
import LogisticsComponents from '../../Components/LogisticsComponents/LogisticsComponents'
import SMENavbar from '../../Components/SMEComponents/SMENavbar';
const Log = props => {

  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={{
            flexDirection: 'column',
            flex: 1, 
            
        }}>

            <InsuranceHeader title="Logistics" navigate='Home'/>
         
            <LogisticsComponents/>

            <View style={{}}>
            <SMENavbar/>
            </View>
         
      </View>
      </ScrollView>
    </>
  );
}

export default Log;