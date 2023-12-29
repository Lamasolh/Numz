import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import BankingComponentsHeader from "../../Components/BankingComponents/BankingComponentsHeader";
import BankingCards from "../../Components/BankingComponents/BankingCards";
import Bankingpayments from "../../Components/BankingComponents/Bankingpayments";
import BankingCardsbody from "../../Components/BankingComponents/BankingCardsbody";
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Searchbar from '../../Components/HomeComponents/CardsSearchbar';
import RealAsset from '../../Components/RealEstate/RealAsset';
const RealCards = props => {
    const navigation = useNavigation()
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate('RealDetails')}>
                <View style={{
                    flexDirection: 'column', backgroundColor: "#FFF",
                    borderRadius: 15.8,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 6, width: 155
                }}>
                    <Image source={require('../../assets/usa.png')} />
                    <View style={{ backgroundColor: 'white', borderRadius: 7.57, top: -90, width: 80, left: 65 }}>
                        <Text style={{ color: '#00A081', textAlign: 'center', fontWeight: 700 }}>$100,000</Text>
                    </View>
                    <Text style={{ textAlign: 'center', fontSize: 7.21, fontWeight: 700 }}>USA, Texas</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ textAlign: 'center', fontSize: 9.07, fontWeight: 600, color: '#00A081' }}>11%</Text>
                            <Text style={{ textAlign: 'center', fontSize: 7.31, fontWeight: 400 }}>Rate</Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ textAlign: 'center', fontSize: 9.07, fontWeight: 600, color: '#00A081' }}>12 mo.</Text>
                            <Text style={{ textAlign: 'center', fontSize: 7.31, fontWeight: 400 }}>Projected Term</Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ textAlign: 'center', fontSize: 9.07, fontWeight: 600, color: '#00A081' }}>64%</Text>
                            <Text style={{ textAlign: 'center', fontSize: 7.31, fontWeight: 400 }}>Share Price</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <Image source={require('../../assets/scale1.png')} />
                    </View>
                </View>
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'column', backgroundColor: "#FFF",
                    borderRadius: 15.8,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 6, width: 155
                }}>
                    <Image source={require('../../assets/scale2.png')} />
                    <View style={{ backgroundColor: 'white', borderRadius: 7.57, top: -90, width: 80, left: 65 }}>
                        <Text style={{ color: '#00A081', textAlign: 'center', fontWeight: 700 }}>$250,000</Text>
                    </View>
                    <Text style={{ textAlign: 'center', fontSize: 7.21, fontWeight: 700 }}>Australia, Sydney</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ textAlign: 'center', fontSize: 9.07, fontWeight: 600, color: '#00A081' }}>11%</Text>
                            <Text style={{ textAlign: 'center', fontSize: 7.31, fontWeight: 400 }}>Rate</Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ textAlign: 'center', fontSize: 9.07, fontWeight: 600, color: '#00A081' }}>12 mo.</Text>
                            <Text style={{ textAlign: 'center', fontSize: 7.31, fontWeight: 400 }}>Projected Term</Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ textAlign: 'center', fontSize: 9.07, fontWeight: 600, color: '#00A081' }}>64%</Text>
                            <Text style={{ textAlign: 'center', fontSize: 7.31, fontWeight: 400 }}>Share Price</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <Image source={require('../../assets/scale1.png')} />
                    </View>

                </View>
                
            </View> 
             <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <View style={{
                    flexDirection: 'column', backgroundColor: "#FFF",
                    borderRadius: 15.8,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 6, width: 155
                }}>
                    <Image source={require('../../assets/nether.png')} />
                    <View style={{ backgroundColor: 'white', borderRadius: 7.57, top: -90, width: 80, left: 65 }}>
                        <Text style={{ color: '#00A081', textAlign: 'center', fontWeight: 700 }}>$696,000</Text>
                    </View>
                    <Text style={{ textAlign: 'center', fontSize: 7.21, fontWeight: 700 }}>Netherlands, Amsterdam</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ textAlign: 'center', fontSize: 9.07, fontWeight: 600, color: '#00A081' }}>11%</Text>
                            <Text style={{ textAlign: 'center', fontSize: 7.31, fontWeight: 400 }}>Rate</Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ textAlign: 'center', fontSize: 9.07, fontWeight: 600, color: '#00A081' }}>12 mo.</Text>
                            <Text style={{ textAlign: 'center', fontSize: 7.31, fontWeight: 400 }}>Projected Term</Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ textAlign: 'center', fontSize: 9.07, fontWeight: 600, color: '#00A081' }}>64%</Text>
                            <Text style={{ textAlign: 'center', fontSize: 7.31, fontWeight: 400 }}>Share Price</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <Image source={require('../../assets/scale1.png')} />
                    </View>

                </View>
                <View style={{
                    flexDirection: 'column', backgroundColor: "#FFF",
                    borderRadius: 15.8,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 6, width: 155
                }}>
                    <Image source={require('../../assets/london.png')} />
                    <View style={{ backgroundColor: 'white', borderRadius: 7.57, top: -90, width: 80, left: 65 }}>
                        <Text style={{ color: '#00A081', textAlign: 'center', fontWeight: 700 }}>$600,000</Text>
                    </View>
                    <Text style={{ textAlign: 'center', fontSize: 7.21, fontWeight: 700 }}>United Kingdom, Londons</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ textAlign: 'center', fontSize: 9.07, fontWeight: 600, color: '#00A081' }}>11%</Text>
                            <Text style={{ textAlign: 'center', fontSize: 7.31, fontWeight: 400 }}>Rate</Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ textAlign: 'center', fontSize: 9.07, fontWeight: 600, color: '#00A081' }}>12 mo.</Text>
                            <Text style={{ textAlign: 'center', fontSize: 7.31, fontWeight: 400 }}>Projected Term</Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ textAlign: 'center', fontSize: 9.07, fontWeight: 600, color: '#00A081' }}>64%</Text>
                            <Text style={{ textAlign: 'center', fontSize: 7.31, fontWeight: 400 }}>Share Price</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <Image source={require('../../assets/scale1.png')} />
                    </View>

                </View>
                
            </View>
        </View>
        

    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 15,
        backgroundColor: 'white'
    },

    cards: {
        flexDirection: "row",
    },

    maincontainer: {
        flexDirection: "row",
    },
    containernew: {
        backgroundColor: "white",
        width: "33%",
        height: 130,
        borderRadius: 15,

        padding: 10,
        marginLeft: 7,

    },
    insidecard2: {
        width: "65%",
        height: 50,
        borderRadius: 10,
        backgroundColor: "white",
        position: "relative",

    },

    cardinsidecard: {
        position: "absolute",
        top: "18%",
        left: "30%"
    },

    newcontainer: {
        padding: 20,
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "#DFDFDF",
        elevation: 20,
        width: "31%",
        height: 115,
        borderRadius: 15,
        marginLeft: 10,
        marginTop: 20,
        shadowColor: "#00A081",
        marginBottom: 10,
    },

    insidecard: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },

    botomcard: {
        justifyContent: "center",
        alignItems: "center",
    }

})

export default RealCards;