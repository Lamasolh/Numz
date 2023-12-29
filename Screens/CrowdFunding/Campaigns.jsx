import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import NavigationBottom from '../../Components/NavigationBottom/NavigationBottom';
import Inputs from '../../Components/HomeComponents/GeneralComponents/Inputs/Inputs';
import CrowdHeaderWhite from '../../Components/CrowdFunding/CrowdHeaderWhite';

const Campaigns = props => {
    
    const [showComponent, setShowComponent] = useState(true)
    const [showComponent2, setShowComponent2] = useState(false)

    const [color, setcolor] = useState("#FFFFFF")
    const [color2, setcolor2] = useState("#9DB2AE")

    const [bgcolor, bgsetcolor] = useState("#00A081")
    const [bgcolor2, bgsetcolor2] = useState("#D1EEE8")

    return (
        <>
            <ScrollView>
                <View>
                    <CrowdHeaderWhite title="My Campaigns" />
                </View>
                <View style={styles.newcontainer}>

                    <TouchableOpacity style={{
                        width: "50%",
                        padding: 10,
                        backgroundColor: bgcolor,
                        justifyContent: "center",
                        alignItems: "center",
                        borderTopLeftRadius: 8,
                        borderBottomLeftRadius: 8,
                    }}
                        onPress={() => {
                            setShowComponent(true), setShowComponent2(false),
                                setcolor2("#9DB2AE"), bgsetcolor2("#D1EEE8"),
                                setcolor("#FFFFFF"), bgsetcolor("#00A081")
                        }}><Text style={{ color: color, fontWeight: 600, fontSize: 15.38 }} >My Donations</Text></TouchableOpacity>

                    <TouchableOpacity style={{
                        width: "50%",
                        padding: 10,
                        backgroundColor: bgcolor2,
                        justifyContent: "center",
                        alignItems: "center",
                        borderTopRightRadius: 8,
                        borderBottomRightRadius: 8,
                    }}
                        onPress={() => {
                            setShowComponent(false), setShowComponent2(true),
                                setcolor2("#FFFFFF"), bgsetcolor2("#00A081"),
                                setcolor("#9DB2AE"), bgsetcolor("#D1EEE8")
                        }}>
                        <Text style={{ color: color2, fontWeight: 600, fontSize: 15.38 }} > My Campaigns</Text></TouchableOpacity>
                </View>
                {showComponent2 &&
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
                                <Image source={require('../../assets/camp.png')} style={{ width: 115, height: 150, borderRadius: 20 }} />
                            </View>
                            <View style={{ flexDirection: 'column', right: 7, top: 20, paddingLeft: 1 }}>
                                <Text style={{ fontSize: 12.66, fontWeight: 800 }}>Australia, Syndey</Text>
                                <Text style={{ marginTop: 15, color: 'rgba(105, 105, 105, 1),', fontSize: 11.08 }}>Sara broken legs and hips</Text>
                                <Text style={{ color: 'rgba(105, 105, 105, 1),', fontSize: 11.08 }}> need surgery</Text>
                                <Image source={require('../../assets/line3.png')} style={{ top: 30 }} />
                            </View>

                        </View>
                    </View>
                }
                {showComponent2 &&
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
                                <Image source={require('../../assets/camp.png')} style={{ width: 115, height: 150, borderRadius: 20 }} />
                            </View>
                            <View style={{ flexDirection: 'column', right: 7, top: 20, paddingLeft: 1 }}>
                                <Text style={{ fontSize: 12.66, fontWeight: 800 }}>Australia, Syndey</Text>
                                <Text style={{ marginTop: 15, color: 'rgba(105, 105, 105, 1),', fontSize: 11.08 }}>Sara broken legs and hips</Text>
                                <Text style={{ color: 'rgba(105, 105, 105, 1),', fontSize: 11.08 }}> need surgery</Text>
                                <Image source={require('../../assets/line3.png')} style={{ top: 30 }} />
                            </View>
                       
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../../assets/newCamp.png')} style={{ top: 40 }} />
                   </View> 
                   </View>
                }

                {showComponent &&
                    <View style={{ padding: 20 }}>

                    </View>
                }

            </ScrollView>
            <NavigationBottom />
        </>
    );
}


const styles = StyleSheet.create({



    newcontainer: {

        padding: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"

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


export default Campaigns;