import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import BankingComponentsHeader from "../../Components/BankingComponents/BankingComponentsHeader";
import Inputwithgreybackground from '../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground';
import SMENavbar from '../../Components/SMEComponents/SMENavbar';
import BigButton3 from '../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3';
import TextAreawithcolorsandtitle from '../../Components/HomeComponents/GeneralComponents/Inputs/TextAreawithcolorsandtitle';

const Log3 = props => {

  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

            <BankingComponentsHeader title="Receiver" navigate='LogisticScreens2'/>
            <Inputwithgreybackground label="Receiver’s Name"/>
            <Inputwithgreybackground label="Phone Number"/>
            <Inputwithgreybackground label="Email"/>
            <Inputwithgreybackground label="City"/>
            <TextAreawithcolorsandtitle label="Address Details"/>
            <View style={{marginTop:"18%"}}>
            <BigButton3 title="Next" navigate="LogisticScreens4"/>
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
        padding:30,
        backgroundColor:"white",
      
    }
    ,
  
})

export default Log3;