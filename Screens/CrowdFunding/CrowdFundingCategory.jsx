import React, { useState } from 'react'
import { Dimensions, StyleSheet } from 'react-native';
import { View } from 'react-native';
import CrowdHeader from '../../Components/CrowdFunding/CrowdHeader';
import Searchbar from '../../Components/HomeComponents/CardsSearchbar';
import { Image } from 'react-native';
import { Text } from 'react-native';
import { Button } from 'react-native';
import Services from '../../Components/CrowdFunding/Services';
import { ScrollView } from 'react-native';
import RecentCards from '../../Components/CrowdFunding/RecentCards';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import Buttons from '../../Components/HomeComponents/GeneralComponents/Inputs/Button/Button';
import { useNavigation } from '@react-navigation/native';

const CrowdFundingCategory = props => {
    const navigation=useNavigation()
    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View>
                <CrowdHeader navigate2="CrowdFundingCategory" />

                <Image style={{ position: 'relative' }} source={require('../../assets/backfund.png')} />
                <Image style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', top: 130, left: 68 }}
                    source={require('../../assets/handfund.png')} />
                <Text style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', fontSize: 31.09, top: 380, textAlign: 'center', paddingLeft: 25, fontWeight: 700, color: 'white' }}>Get The Help That You Need!</Text>
                <Text style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', fontSize: 20, top: 520, textAlign: 'center', paddingLeft: 100, fontWeight: 300, color: 'rgba(0, 160, 129, 1)' }}>Choose your category</Text>

                <View style={{
                    flex: 1, width: "100%",
                    justifyContent: 'stretch', marginTop: 2
                }}>

                    <ScrollView horizontal={true} style={{ flex: 1, }}>

                        <View style={{ flexDirection: "row", height: 150, width: "100%" }}>
                            <Services navigate='CrowdFundingNewCampaign' title="Startups" imageUri={require("../../assets/plane.png")} />
                            <Services navigate='CrowdFundingNewCampaign' title="Education" imageUri={require("../../assets/education.png")} />
                            <Services navigate='CrowdFundingNewCampaign' title="Health" imageUri={require("../../assets/health.png")} />
                            <Services navigate='CrowdFundingNewCampaign' title="Disasters" imageUri={require("../../assets/disasters.png")} />
                            <Services navigate='CrowdFundingNewCampaign' title="Startups" imageUri={require("../../assets/plane.png")} />
                        </View>
                    </ScrollView>
                </View>
                <View style={{ marginTop: -90, marginBottom: 20, padding: 20 }}>
                    <Buttons title="Next" navigate="CrowdFundingNewCampaign" />
                </View>
                <SMENavbar />
            </View>
        </ScrollView>
    );

}
const styles = StyleSheet.create({
    Homecontainer: {
        marginTop: 10,
        justifyContent: 'center',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        }, borderRadius: 19.9,
        shadowOpacity: 0.25,
        shadowRadius: 4,

        backgroundColor: 'white',
        marginBottom: -100
    },
    warp: {
        marginHorizontal: -2,
        width: 320,
        height: 150
    },
    dotWarp: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        margin: 3,
        color: 'rgba(0, 160, 129, 1)',
    },
    dot: {
        margin: 3,
        color: 'rgba(217, 217, 217, 1)'
    },
    cardsicons: {
        padding: 30,
        flexDirection: "row",
        height: 180,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        position: 'relative',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 6,
        borderRadius: 19,
        backgroundColor: 'white'
    }
    ,
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
})
export default CrowdFundingCategory;