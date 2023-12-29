import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import EducationComponents from "../../Components/EducationComponents/EducationComponents";
import InsuranceHeader from '../../Components/InsuranceComponents/InsuranceHeader';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import EducationPopup from "../../Components/EducationComponents/EducationPopup";
import EducationComponents3 from "../../Components/EducationComponents/EducationComponents3";
import EducationComponents4 from "../../Components/EducationComponents/EducationComponents4";
import EducationComponentsCards from "../../Components/EducationComponents/EducationComponentsCards";

const Education2 = props => {
   
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <InsuranceHeader title="Education" navigate='EducationScreens'/>
        <View style={styles.container}>

         <EducationPopup/>

         <View>
            <Text style={{fontWeight:"bold", color:"black", marginTop:"5%", fontSize:18, marginLeft:"2%"}}>Popular Categories</Text>
         </View>

         <EducationComponents3/>

         <EducationComponents4/>


         <View>
            <Text style={{fontWeight:"bold", color:"black", marginTop:"5%", fontSize:18, marginLeft:"2%"}}>Popular Courses</Text>
         </View>

         <EducationComponentsCards/>
        
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


export default Education2;