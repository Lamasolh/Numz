import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableHighlight, ViewComponent } from 'react-native';
import NewInputswithcolor from '../HomeComponents/GeneralComponents/Inputs/NewInputswithcolor';
import Stopinput from '../HomeComponents/GeneralComponents/Inputs/Stopinput';

const Pcompcards = props => {



    return (
        <>




            <View style={{ marginTop: 15 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Due this week</Text>
            </View>
            <View style={styles.maincontainer2}>



                <View style={styles.container2}>



                    <View >
                        <Image style={{}}
                            source={require('../../assets/Airbnb.png')}
                        />
                    </View>

                    <View>
                        <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                            Airbnb
                        </Text>

                        <Text style={{ color: "#000000", fontSize: 11, marginLeft: 10 }}>
                            Due in 4 days
                        </Text>

                        <Text style={{ color: "#8E8E93", fontSize: 11, marginLeft: 10 }}>
                            06 Apr, 2021
                        </Text>
                    </View>

                </View>

                <View style={styles.container2right}>
                    <Text style={{ fontWeight: "bold" }}>
                        30$
                    </Text>


                </View>

            </View>




            <View style={styles.maincontainer2}>

                <View style={styles.container2}>

                    <View>
                        <Image style={{}}
                            source={require('../../assets/Netflix.png')}
                        />
                    </View>

                    <View>
                        <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                            Netflix
                        </Text>
                        <Text style={{ color: "#000000", fontSize: 11, marginLeft: 10 }}>
                            Due in 4 days
                        </Text>
                        <Text style={{ color: "#8E8E93", fontSize: 11, marginLeft: 10 }}>
                            06 Apr, 2021
                        </Text>
                    </View>

                </View>

                <View style={styles.container2right}>
                    <Text style={{ fontWeight: "bold" }}>
                        30$
                    </Text>


                </View>

            </View>


            <View style={{ marginTop: 25 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Due next month</Text>
            </View>

            <View style={styles.maincontainer2}>

                <View style={styles.container2}>

                    <View>
                        <Image style={{}}
                            source={require('../../assets/Spotify.png')}
                        />
                    </View>

                    <View>
                        <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                            Spotify
                        </Text>

                        <Text style={{ color: "#8E8E93", fontSize: 11, marginLeft: 10 }}>
                            06 Apr, 2021
                        </Text>
                    </View>

                </View>

                <View style={styles.container2right}>
                    <Text style={{ fontWeight: "bold" }}>
                        10$
                    </Text>


                </View>

            </View>



            <View style={styles.maincontainer2}>

                <View style={styles.container2}>

                    <View>
                        <Image style={{}}
                            source={require('../../assets/Baskin.png')}
                        />
                    </View>

                    <View>
                        <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                            Baskin-Robbins
                        </Text>

                        <Text style={{ color: "#8E8E93", fontSize: 11, marginLeft: 10 }}>
                            06 Apr, 2021
                        </Text>
                    </View>

                </View>

                <View style={styles.container2right}>
                    <Text style={{ fontWeight: "bold" }}>
                        30$
                    </Text>


                </View>

            </View>





            <View style={styles.maincontainer2}>

                <View style={styles.container2}>

                    <View>
                        <Image style={{}}
                            source={require('../../assets/BP.png')}
                        />
                    </View>

                    <View>
                        <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                            BP
                        </Text>

                        <Text style={{ color: "#8E8E93", fontSize: 11, marginLeft: 10 }}>
                            06 Apr, 2021
                        </Text>
                    </View>

                </View>

                <View style={styles.container2right}>
                    <Text style={{ fontWeight: "bold" }}>
                        10$
                    </Text>


                </View>

            </View>



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
    }



})

export default Pcompcards;