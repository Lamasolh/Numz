import React from 'react';
import { StyleSheet, View, ScrollView ,Text} from 'react-native';

import BankingComponentsHeader from "../../Components/BankingComponents/BankingComponentsHeader";
import CardsSearchbar from "../../Components/HomeComponents/CardsSearchbar"
import WorldpayComponent from "../../Components/WorldpayComponent/WorldpayComponent";



const Wpay = props => {
    return (

        <View>

     
       
            <View style={styles.container}>
             
             
            <BankingComponentsHeader navigate='Paycard'/>
            <WorldpayComponent/>
         
               </View>

       
      
      
    </View>



 
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding:3,
        backgroundColor:"#BDC8CF"
      
    }
    ,
  
})

export default Wpay;