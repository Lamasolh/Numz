import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import Inputwithgreybackground from '../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BigButton3 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3"
import InsuranceDownload from "../../Components/InsuranceComponents/InsuranceDownload";

const Ins7 = props => {
  

  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="" navigate='InsuranceScreens5'/>

        <View>
            <Text style={{textAlign:"center", color:"#00A081", fontWeight:"bold", fontSize:23}}>You can now roam freely with {'\n'} Cybersecurity insurance.</Text>
        </View>

        <View style={{marginTop:"10%",marginLeft:"8%"}}>

            <Text style={{color:"#555555"}}>Download the following to make {'\n'} sure they are always available.</Text>
        </View>

        <InsuranceDownload />

        <View style={{marginTop:"25%"}}>
        <BigButton3 title="Done" navigate='InsuranceScreens1'/>
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
        padding:20,
        backgroundColor:"white",
    
      
    }
    ,
  
})


export default Ins7;