import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import SMEHeader from '../../../Components/SMEComponents/SMEHeader'
import SMEList from '../../../Components/SMEComponents/SMEList'
import SMENavbar from '../../../Components/SMEComponents/SMEHeader';
import Card from '../../../Components/BankingComponents/Card';
import NewInputswithcolor from '../../../Components/HomeComponents/GeneralComponents/Inputs/NewInputswithcolor';
import NavigationBottom from '../../../Components/NavigationBottom/NavigationBottom';
import StopInputs from '../../../Components/HomeComponents/GeneralComponents/Inputs/Stopinput';
import Inputs from '../../../Components/HomeComponents/GeneralComponents/Inputs/Inputs';
const Page2 = props => {
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
                    <SMEHeader title="My Account" navigate="page1" />
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
                        }}><Text style={{ color: color, fontWeight: 600, fontSize: 15.38 }} >Transactions</Text></TouchableOpacity>

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
                        <Text style={{ color: color2, fontWeight: 600, fontSize: 15.38 }} >Details</Text></TouchableOpacity>

                </View>


                {showComponent &&

                    <View style={styles.calendar}>

                        <Text style={{ fontSize: 18, marginTop: 6 }}>Recent Transactions   </Text>

                        <Image style={{ marginTop: 9 }}
                            source={require('../../../assets/Calendar.png')}
                        />

                    </View>
                }


                {showComponent &&
                    <View style={styles.maincontainer2}>

                        <View style={styles.container2}>

                            <View>
                                <Image style={{}}
                                    source={require('../../../assets/Airbnb.png')}
                                />
                            </View>

                            <View>
                                <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                                    Airbnb
                                </Text>

                                <Text style={{ color: "#8E8E93", fontSize: 12, marginLeft: 10 }}>
                                    06 Apr, 2021
                                </Text>
                            </View>

                        </View>

                        <View style={styles.container2right}>
                            <Text style={{ fontWeight: "bold" }}>
                                -30$
                            </Text>

                            <Text style={{ color: "#8E8E93", fontSize: 12 }}>
                                9:10 PM
                            </Text>
                        </View>

                    </View>

                }


                {showComponent &&
                    <View style={styles.maincontainer2}>

                        <View style={styles.container2}>

                            <View>
                                <Image style={{}}
                                    source={require('../../../assets/Netflix.png')}
                                />
                            </View>

                            <View>
                                <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                                    Netflix
                                </Text>

                                <Text style={{ color: "#8E8E93", fontSize: 12, marginLeft: 10 }}>
                                    06 Apr, 2021
                                </Text>
                            </View>

                        </View>

                        <View style={styles.container2right}>
                            <Text style={{ fontWeight: "bold" }}>
                                -30$
                            </Text>

                            <Text style={{ color: "#8E8E93", fontSize: 12 }}>
                                2:30 PM
                            </Text>
                        </View>

                    </View>

                }

                {showComponent &&
                    <View style={styles.maincontainer2}>

                        <View style={styles.container2}>

                            <View>
                                <Image style={{}}
                                    source={require('../../../assets/Spotify.png')}
                                />
                            </View>

                            <View>
                                <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                                    Spotify
                                </Text>

                                <Text style={{ color: "#8E8E93", fontSize: 12, marginLeft: 10 }}>
                                    06 Apr, 2021
                                </Text>
                            </View>

                        </View>

                        <View style={styles.container2right}>
                            <Text style={{ fontWeight: "bold" }}>
                                -10$
                            </Text>

                            <Text style={{ color: "#8E8E93", fontSize: 12 }}>
                                11:00 AM
                            </Text>
                        </View>

                    </View>

                }

                {showComponent &&

                    <View style={styles.maincontainer2}>

                        <View style={styles.container2}>

                            <View>
                                <Image style={{}}
                                    source={require('../../../assets/Baskin.png')}
                                />
                            </View>

                            <View>
                                <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                                    Baskin-Robbins
                                </Text>

                                <Text style={{ color: "#8E8E93", fontSize: 12, marginLeft: 10 }}>
                                    06 Apr, 2021
                                </Text>
                            </View>

                        </View>

                        <View style={styles.container2right}>
                            <Text style={{ fontWeight: "bold" }}>
                                -30$
                            </Text>

                            <Text style={{ color: "#8E8E93", fontSize: 12 }}>
                                8:15 PM
                            </Text>
                        </View>

                    </View>

                }

                {showComponent &&

                    <View style={styles.maincontainer2}>

                        <View style={styles.container2}>

                            <View>
                                <Image style={{}}
                                    source={require('../../../assets/marita.png')}
                                />
                            </View>

                            <View>
                                <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                                    Marita Covarrubias
                                </Text>

                                <Text style={{ color: "#8E8E93", fontSize: 12, marginLeft: 10 }}>
                                    06 Apr, 2021
                                </Text>
                            </View>

                        </View>

                        <View style={styles.container2right}>
                            <Text style={{ fontWeight: "bold", color: "#00A081" }}>
                                +15,000 $
                            </Text>

                            <Text style={{ color: "#8E8E93", fontSize: 12, }}>
                                3:30 PM
                            </Text>
                        </View>

                    </View>


                }

                {showComponent &&
                    <View style={styles.maincontainer2}>

                        <View style={styles.container2}>

                            <View>
                                <Image style={{}}
                                    source={require('../../../assets/mcdo.png')}
                                />
                            </View>

                            <View>
                                <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                                    McDonald’s
                                </Text>

                                <Text style={{ color: "#8E8E93", fontSize: 12, marginLeft: 10 }}>
                                    06 Apr, 2021
                                </Text>
                            </View>

                        </View>

                        <View style={styles.container2right}>
                            <Text style={{ fontWeight: "bold" }}>
                                -10$
                            </Text>

                            <Text style={{ color: "#8E8E93", fontSize: 12 }}>
                                11:20 AM
                            </Text>
                        </View>

                    </View>


                }

                {showComponent &&
                    <View style={styles.maincontainer2}>

                        <View style={styles.container2}>

                            <View>
                                <Image style={{}}
                                    source={require('../../../assets/BP.png')}
                                />
                            </View>

                            <View>
                                <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                                    BP
                                </Text>

                                <Text style={{ color: "#8E8E93", fontSize: 12, marginLeft: 10 }}>
                                    06 Apr, 2021
                                </Text>
                            </View>

                        </View>

                        <View style={styles.container2right}>
                            <Text style={{ fontWeight: "bold" }}>
                                -10$
                            </Text>

                            <Text style={{ color: "#8E8E93", fontSize: 12 }}>
                                10:50 AM
                            </Text>
                        </View>

                    </View>
                }

                {showComponent2 &&
                    <View style={{ padding: 20 }}>
                        <Inputs label="Available Balance" placeholder="" />
                        <Inputs label="Currency" placeholder="" />
                        <Inputs label="Due Balannce" placeholder="" />
                        <Inputs label="Account Holder Name" placeholder="" />
                        <Inputs label="Settlement Account" placeholder="" />
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


export default Page2;