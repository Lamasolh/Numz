import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import InsuranceHeader from '../../Components/InsuranceComponents/InsuranceHeader';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import EduButtonsComponents2 from "../../Components/EducationComponents/EduButtonsComponents2";
const Education6 = props => {
   
  return (
    <>
    <ScrollView style={{backgroundColor:"white"}}>

    <InsuranceHeader title="Education" navigate='EducationScreens2'/>
    
        <View style={styles.container}>

      

        <EduButtonsComponents2/>
        </View>
      
        </ScrollView>

        <View style={{backgroundColor:"white"}}>
        <SMENavbar/>
        </View>
    
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
 
        backgroundColor:"white",
      
       
      
    }
    ,
  
})


export default Education6;