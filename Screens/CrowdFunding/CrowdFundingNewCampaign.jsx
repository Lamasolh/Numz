import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import CrowdHeader from '../../Components/CrowdFunding/CrowdHeader';
import { Image } from 'react-native';
import { Text } from 'react-native';
import { ScrollView } from 'react-native';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import Inputs from '../../Components/HomeComponents/GeneralComponents/Inputs/Inputs';
import Buttons from '../../Components/HomeComponents/GeneralComponents/Inputs/Button/Button';
import Radio from '../../Components/HomeComponents/GeneralComponents/Inputs/Radio';
import { TextInput } from 'react-native';


const CrowdFundingNewCampaign = props => {
    return (
        <ScrollView vertical style={{ backgroundColor: "white" }}>
            <View>
                <CrowdHeader title="New Campaign" navigate2='CrowdFundingCategory' />
                <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                    <Image source={require('../../assets/backgreen.png')} />
                </View>
                <View style={{ marginTop: 30, justifyContent: 'center', top: 170, left: 120, alignItems: 'center', position: 'absolute' }}>
                    <Image source={require('../../assets/addgreen.png')} />
                </View>
                <View style={{ paddingLeft: 30, marginTop: 20 }}><Text
                    style={{ fontSize: 13, fontWeight: 700 }}>
                    Add photos or videos </Text></View>
                <ScrollView horizontal>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>

                        <View style={{ flexDirection: 'column', paddingLeft: 25, position: 'relative' }}>
                            <Image source={require('../../assets/smallgreen.png')} />
                        </View>
                        <View style={{ flexDirection: 'column', paddingLeft: 25, top: 34, left: 34, position: 'absolute' }}>
                            <Image source={require('../../assets/addsmall.png')} />
                        </View>
                        <View style={{ flexDirection: 'column', paddingLeft: 25 }}>
                            <Image source={require('../../assets/smallgreen.png')} />
                        </View>
                        <View style={{ flexDirection: 'column', paddingLeft: 25 }}>
                            <Image source={require('../../assets/smallgreen.png')} />
                        </View>
                        <View style={{ flexDirection: 'column', paddingLeft: 25 }}>
                            <Image source={require('../../assets/smallgreen.png')} />
                        </View>
                        <View style={{ flexDirection: 'column', paddingLeft: 25 }}>
                            <Image source={require('../../assets/smallgreen.png')} />
                        </View>
                    </View>

                </ScrollView>
                <View style={{ paddingLeft: 30, marginTop: 20 }}><Text
                    style={{ fontSize: 13, fontWeight: 700 }}>
                    Campaign Details </Text></View>
                <View style={{ paddingLeft: 25, paddingRight: 25 }}>
                    <Inputs label="Campaign Title" />
                    <Inputs label="Country" />
                    <Inputs label="Donation Required" />
                    <Inputs label="Donation End Date" />
                    <View style={{borderColor: '#E3E5E5', borderWidth: 2, borderRadius: 8,height:100, padding: 10, marginTop:20 }}>
                    <Text style={{ fontSize: 11, marginLeft: 12, color: 'rgba(114, 119, 122, 1)' }} >Description</Text>
                     <TextInput /></View>
                    <Text
                        style={{ fontSize: 13, fontWeight: 700, marginTop: 15 }}>
                        Payment Types </Text>
                    <Radio />
                    <Buttons title="Submit" />
                </View>
                <SMENavbar />
            </View>
        </ScrollView>
    );

}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center'
    },
    radioText: {
        fontSize: 14.5,
        color: '#72777A',
        paddingLeft: 7,

    },
    radiobg: {
        justifyContent: 'center',
        marginLeft: 1,
        marginTop: 1,
        backgroundColor: '#00A081',
        height: 12,
        width: 12,
        borderRadius: 20,
    },
    radio: {

        width: 20,
        height: 20,
        borderColor: '#00A081',
        borderRadius: 20,
        borderWidth: 3,
    },
    warper: {
        marginTop: 10,
        flexDirection: 'row'
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
})
export default CrowdFundingNewCampaign