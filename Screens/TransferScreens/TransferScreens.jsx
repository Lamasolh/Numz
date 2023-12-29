import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import BankingComponentsHeader from "../../Components/BankingComponents/BankingComponentsHeader";
import TransferList from '../../Components/TransferComponents/TransferList'
import SMENavbar from '../../Components/SMEComponents/SMENavbar';

const Transfer = props => {

  return (
    <>

 
        <ScrollView>

        <View style={styles.container}>

            <BankingComponentsHeader title="Trasnfers"  navigate='Banking'/>


      </View>
      <TransferList/>
      <SMENavbar/>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding:25,
      
    }
    ,
  
})


export default Transfer;