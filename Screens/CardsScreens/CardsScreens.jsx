import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import BankingComponentsHeader from "../../Components/BankingComponents/BankingComponentsHeader";
import CardsComponents from "../../Components/CardsComponents/CardsComponents";
import Cardsslidshow from "../../Components/CardsComponents/Cardsslidshow";
import ButtonsComponents from "../../Components/CardsComponents/ButtonsComponents";
import SMENavbar from "../../Components/SMEComponents/SMENavbar";

const Cards = props => {
    return (
        <View>
            <ScrollView>

                <View style={styles.container}>

                  <BankingComponentsHeader title="Cards" navigate='Banking'/>

                  <CardsComponents/>

                    <Cardsslidshow/>

                    <ButtonsComponents/>
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

export default Cards;