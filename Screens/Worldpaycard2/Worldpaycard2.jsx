import React from 'react';
import { StyleSheet, View, ScrollView ,Text} from 'react-native';

import BankingComponentsHeader from "../../Components/BankingComponents/BankingComponentsHeader";
import Inputwithgreybackground from "../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground";
import Selectwithgreybackground from "../../Components/HomeComponents/GeneralComponents/Inputs/Selects/Selectwithgreybackground";
import WorldpaySwitch from "../../Components/WorldpayComponent/WorldpaySwitch";
import SMENavbar from '../../Components/SMEComponents/SMENavbar';
import Worldpaypopup from '../../Components/WorldpayComponent/Worldpaypopup';
const Wpay = props => {
    return (

        
        <View>

        <ScrollView>
       
            <View style={styles.container}>
             
             
            <BankingComponentsHeader title='World Pay Card' navigate='wpaycard2'/>
            <Selectwithgreybackground label="Account Number"/>
            <Inputwithgreybackground label="Card Name"/>
            <Inputwithgreybackground label="Mobile Number" />
            <WorldpaySwitch switch1="Domiciliation Salary" switch2="SMS Serivce"/>
            <View  style={{width:"100%", marginTop:80}}>
                <Worldpaypopup/>
            </View>
           
               </View>
               <SMENavbar/>
               </ScrollView>
         
         
      
      
    </View>



 
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding:25,
      
    }
    ,
  
})

export default Wpay;