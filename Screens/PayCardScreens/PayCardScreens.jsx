import React from 'react';
import { StyleSheet, View, ScrollView ,Text} from 'react-native';

import BankingComponentsHeader from "../../Components/BankingComponents/BankingComponentsHeader";
import CardsSearchbar from "../../Components/HomeComponents/CardsSearchbar"
import PayCardsComponents from "../../Components/PayCardsComponents/PayCardsComponents";

import ButtonsComponents from "../../Components/CardsComponents/ButtonsComponents";
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import Inputwithgreybackground from "../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground"
import BigButton from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton"
const Pin = props => {
    return (

        <View>
        <ScrollView
        >

            <View style={styles.container}>

                 <BankingComponentsHeader title="Cards" navigate='Cards'/>


                <CardsSearchbar/>

              
                <PayCardsComponents/>

                
               </View>
            <SMENavbar/>
        </ScrollView>
      
    </View>



 
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 20,
    
      
    }
    ,
  
})

export default Pin;