import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import NavigationBottom from '../../Components/NavigationBottom/NavigationBottom';
import Buttons from '../../Components/HomeComponents/GeneralComponents/Inputs/Button/Button';
import InvestingHeaderComponent from '../../Components/InvestingComponents/InvestingHeaderComponent';

import InputsWithoutLabel from '../../Components/HomeComponents/GeneralComponents/Inputs/InputsWithoutLabel';
import { useNavigation } from '@react-navigation/native';
import InvestingHeaderComponentBuy from '../../Components/InvestingComponents/InvestingHeaderComponentBuy';
const BitcoinBuy1 = props => {
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={{ backgroundColor: 'white' }}>
                <View>
                    <InvestingHeaderComponentBuy title="Buy Bitcoin" navigate='InvestingTesla' />
                </View>
                <View>
                    <Text style={{
                        justifyContent: 'center', textAlign: 'center'
                        , color: '#6C757D'
                    }}>Enter amount in USD</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ flexDirection: 'column', padding: 20, width: 120, height: 100 }}>

                        <InputsWithoutLabel placeholder='$100' />
                    </View>
                    <View style={{ flexDirection: 'column', padding: 37, width: 120, height: 100 }}>
                        <Text style={{ fontSize: 27 }}>TO</Text>
                    </View>
                    <View style={{ flexDirection: 'column', padding: 20, width: 120, height: 100 }}>

                        <InputsWithoutLabel placeholder='BTC 5' editable='false' />
                    </View>

                </View>
                <View>
                    <Text style={{
                        justifyContent: 'center', textAlign: 'center'
                        , color: '#6C757D', fontSize: 17
                    }}>Min $100</Text>
                </View>
                <View>
                    <Text style={{
                        justifyContent: 'center', textAlign: 'center'
                        , color: '#00A081', fontSize: 19.7, marginTop: 40
                    }}>Current Balance:  $10,000</Text>
                </View>
      

                    <View style={{ marginBottom: 220, padding: 25 }}>
                        <Buttons title="Confirm" navigate='TotalBalanceScreen' />
                    </View>
            
                <NavigationBottom />
            </View>
        </ScrollView >



    );
}


const styles = StyleSheet.create({



    newcontainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },

    cardsicons: {

        justifyContent: "center",
        alignItems: "center",
    },

    btn1: {

        width: "50%",
        padding: 10,
        backgroundColor: "#00A081",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },

    btn2: {

        width: "50%",
        padding: 10,
        backgroundColor: "#00A081",
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    calendar: {

        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    },

    container2: {

        flexDirection: "row",

    },

    container2right: {

        alignItems: "center",
        justifyContent: "center",
    },
    maincontainer2: {

        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 20,
        marginHorizontal: 20
    }


})


export default BitcoinBuy1;