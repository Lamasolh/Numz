import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import BankingComponentsHeader from "../../Components/BankingComponents/BankingComponentsHeader";
import CardsComponents from "../../Components/CardsComponents/CardsComponents";
import Cardsslidshow from "../../Components/CardsComponents/Cardsslidshow";
import ButtonsComponents from "../../Components/CardsComponents/ButtonsComponents";
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import Inputwithgreybackground from "../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground"
import BigButton from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton"
import Selectwithgreybackground from "../../Components/HomeComponents/GeneralComponents/Inputs/Selects/Selectwithgreybackground";
const Param = props => {
    return (
        <View>
            <ScrollView>

                <View style={styles.container}>

                  <BankingComponentsHeader title="New Parameters" navigate='Cards'/>

                    <Cardsslidshow/>
                    <Selectwithgreybackground label="Purchase Frequency"/>
                    <Inputwithgreybackground label="Select Card " />
                    <Selectwithgreybackground label="Withdrawal Frequency"/>
                    <Inputwithgreybackground label="Withdrawal Amount" />
                    <BigButton title="Save"/>
                </View>
                
            <SMENavbar/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 30,
      
    }
})

export default Param;