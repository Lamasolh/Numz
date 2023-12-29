import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import BankingComponentsHeader from "../../Components/BankingComponents/BankingComponentsHeader";
import CardsComponents from "../../Components/CardsComponents/CardsComponents";
import Cardsslidshow from "../../Components/CardsComponents/Cardsslidshow";
import ButtonsComponents from "../../Components/CardsComponents/ButtonsComponents";
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import Inputwithgreybackground from "../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground"
import BigButton from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton"
const Pin = props => {
    return (
        <View>
            <ScrollView>

                <View style={styles.container}>

                  <BankingComponentsHeader title="New Pin" navigate='Cards'/>

                    <Cardsslidshow/>
                    <Inputwithgreybackground label="Select Card " />

                    <BigButton title="Request New Pin"/>
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

export default Pin;