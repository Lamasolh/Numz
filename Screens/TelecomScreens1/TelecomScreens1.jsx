import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import TelecomComponentsSearch from '../../Components/TelecomComponents/TelecomComponentsSearch';
import TelecomComponentsCards from '../../Components/TelecomComponents/TelecomComponentsCards';
import TelecomComponentsCards2 from '../../Components/TelecomComponents/TelecomComponentsCards2';
import TelecomComponentsCards3 from '../../Components/TelecomComponents/TelecomComponentsCards3';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BigButton3 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3"


const T1 = props => {
  
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="" navigate='Home'/>
        
        <TelecomComponentsSearch/>

        <View style={{justifyContent:"center",alignItems:"center"}}>
        <Image style={{marginLeft:"3%" }}
              source={require('../../assets/telecomcard.png')}
        />
        </View>
       
       </View>

        <View style={{paddingLeft:20}}>
       <TelecomComponentsCards/>
       </View>
       <View style={{paddingLeft:35,marginTop:20}}>
        <Text style={{fontSize:15, fontWeight:"bold"}}>What's New</Text>
       </View>
       <View style={{paddingLeft:20}}>
       <TelecomComponentsCards2/>
       
        </View>

        <View style={{paddingLeft:35,marginTop:20}}>
        <Text style={{fontSize:15, fontWeight:"bold"}}>Latest News</Text>
       </View>

       <View style={{}}>
       <TelecomComponentsCards3/>
       
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


export default T1;