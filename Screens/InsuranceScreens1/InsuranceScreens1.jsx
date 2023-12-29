import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import InsuranceComponents1 from "../../Components/InsuranceComponents/InsuranceComponents1";
import InsuranceComponents2 from "../../Components/InsuranceComponents/InsuranceComponents2";


const Ins1 = props => {
  
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title=" Insurance" navigate='Home'/>
        
        <View>
        <Image style={{}}source={require('../../assets/bonuscard.png')}/> 
        </View>

        <InsuranceComponents1/>

        <View style={{marginTop:"8%", marginLeft:"5%"}}>
            <Text>Popular Policies</Text>
        </View>
        
     
       <ScrollView horizontal={true}>
        <InsuranceComponents2/>

        </ScrollView>

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


export default Ins1;