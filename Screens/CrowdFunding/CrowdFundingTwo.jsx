import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
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
import CrowdHeaderWhite from '../../Components/CrowdFunding/CrowdHeaderWhite';
import { useNavigation } from '@react-navigation/native';


const CrowdFundingTwo = props => {
    const navigation=useNavigation()
    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View>

                <CrowdHeaderWhite title="Crowdfunding" navigate="CrowdFunding" />
                <View style={{ marginTop: 10 }}>
                    <Searchbar />
                </View>

                <View style={{
                    flex: 1, width: "100%",
                    justifyContent: 'stretch', marginTop: 10
                }}>

                    <ScrollView horizontal={true} style={{ flex: 1, }}>

                        <View style={{ flexDirection: "row", height: 150, width: "100%" }}>
                            <Services navigate='Startups' title="Startups" imageUri={require("../../assets/plane.png")} />
                            <Services navigate='education' title="Education" imageUri={require("../../assets/education.png")} />
                            <Services navigate='health' title="Health" imageUri={require("../../assets/health.png")} />

                            <TouchableOpacity style={styles.maincontainer} onPress={() => navigation.navigate('CrowdFundingTwo')}>
                                <View style={{
                                    backgroundColor: "#00A081",
                                    borderRadius: 12,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 1,
                                    },
                                    shadowOpacity: 0.2,
                                    shadowRadius: 6,
                                    elevation: 6, width: 100
                                }}>
                                    <View style={{ width: "100%", height: 70, position: "relative", justifyContent: "center", alignItems: "center" }}>


                                        <Image style={{ width: "56%", height: 55, marginTop: 8 }}
                                            source={require('../../assets/backwhite.png')}


                                        />


                                        <Image style={{ position: "absolute", left: "40%", top: "40%", width: 20 }}
                                            source={require("../../assets/dis1.png")}


                                        />
                                    </View>

                                    <Text style={{ color: "white", fontSize: 12, textAlign: 'center', padding: 5 }}>Disasters</Text>
                                </View>
                            </TouchableOpacity>

                            <Services navigate='Startups' title="Startups" imageUri={require("../../assets/plane.png")} />
                        </View>
                    </ScrollView>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("CrowdFundingDetials")}>
                <View style={{ padding: 8 }}>
                    <View style={{
                        flexDirection: 'row', shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        }, backgroundColor: 'white',
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                        borderRadius: 19.9
                    }}>
                        <View style={{
                            flex: 1, width: "100%",
                            justifyContent: 'stretch',

                            padding: 5,
                            flexDirection: 'column'
                        }}>
                            <Image source={require('../../assets/recent1.png')} style={{ width: 115, height: 150, borderRadius: 20 }} />
                        </View>
                        <View style={{ flexDirection: 'column', right: 7, top: 20, paddingLeft: 1 }}>
                            <Text style={{ fontSize: 12.66, fontWeight: 800 }}>Australia, Syndey</Text>
                            <Text style={{ marginTop: 15, color: 'rgba(105, 105, 105, 1),', fontSize: 11.08 }}>Sara broken legs and hips</Text>
                            <Text style={{ color: 'rgba(105, 105, 105, 1),', fontSize: 11.08 }}> need surgery</Text>
                            <Image source={require('../../assets/line3.png')} style={{ top: 30 }} />
                        </View>

                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("CrowdFundingDetials")}>
                <View style={{ padding: 8 }}>
                    
                    <View style={{
                        flexDirection: 'row', shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        }, backgroundColor: 'white',
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                        borderRadius: 19.9
                    }}>
                        <View style={{
                            flex: 1, width: "100%",
                            justifyContent: 'stretch',

                            padding: 5,
                            flexDirection: 'column'
                        }}>
                            <Image source={require('../../assets/recent1.png')} style={{ width: 115, height: 150, borderRadius: 20 }} />
                        </View>
                        <View style={{ flexDirection: 'column', right: 7, top: 20, paddingLeft: 1 }}>
                            <Text style={{ fontSize: 12.66, fontWeight: 800 }}>Australia, Syndey</Text>
                            <Text style={{ marginTop: 15, color: 'rgba(105, 105, 105, 1),', fontSize: 11.08 }}>Sara broken legs and hips</Text>
                            <Text style={{ color: 'rgba(105, 105, 105, 1),', fontSize: 11.08 }}> need surgery</Text>
                            <Image source={require('../../assets/line3.png')} style={{ top: 30 }} />
                        </View>

                    </View>
                </View>
                </TouchableOpacity>
                <View style={{ padding: 8 }}>
                    <View style={{
                        flexDirection: 'row', shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        }, backgroundColor: 'white',
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                        borderRadius: 19.9
                    }}>
                        <View style={{
                            flex: 1, width: "100%",
                            justifyContent: 'stretch',

                            padding: 5,
                            flexDirection: 'column'
                        }}>
                            <Image source={require('../../assets/recent1.png')} style={{ width: 115, height: 150, borderRadius: 20 }} />
                        </View>
                        <View style={{ flexDirection: 'column', right: 7, top: 20, paddingLeft: 1 }}>
                            <Text style={{ fontSize: 12.66, fontWeight: 800 }}>Australia, Syndey</Text>
                            <Text style={{ marginTop: 15, color: 'rgba(105, 105, 105, 1),', fontSize: 11.08 }}>Sara broken legs and hips</Text>
                            <Text style={{ color: 'rgba(105, 105, 105, 1),', fontSize: 11.08 }}> need surgery</Text>
                            <Image source={require('../../assets/line3.png')} style={{ top: 30 }} />
                        </View>

                    </View>
                </View>
                <SMENavbar />
            </View>
        </ScrollView>
    );

}
const styles = StyleSheet.create({
    maincontainer: {
        padding: 5,
        height: 115,
        width: "18%",
        elevation: 12,
        backgroundColor: "white",
        marginTop: 15,
        borderRadius: 20,
        alignItems: "center",
        flexDirection: "column",
        marginLeft: 10



    },
    container: {
        flex: 1,
        // paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
})
export default CrowdFundingTwo