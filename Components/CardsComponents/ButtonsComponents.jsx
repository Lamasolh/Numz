import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableHighlight, ViewComponent } from 'react-native';
import NewInputswithcolor from '../HomeComponents/GeneralComponents/Inputs/NewInputswithcolor';
import Stopinput from '../HomeComponents/GeneralComponents/Inputs/Stopinput';
import StopInputs from '../HomeComponents/GeneralComponents/Inputs/Stopinput';

const Buttonscompcards = props => {


    const [showComponent, setShowComponent] = useState(true)
    const [showComponent2, setShowComponent2] = useState(false)

    const [color, setcolor] = useState("#FFFFFF")
    const [color2, setcolor2] = useState("#9DB2AE")

    const [bgcolor, bgsetcolor] = useState("#00A081")
    const [bgcolor2, bgsetcolor2] = useState("#D1EEE8")
    return (
        <>



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
                    }}><Text style={{ color: color }} >Transactions</Text></TouchableOpacity>

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
                    <Text style={{ color: color2 }} >Details</Text></TouchableOpacity>

            </View>


            {showComponent &&

                <View style={styles.calendar}>

                    <Text style={{ fontSize: 18, }}>Recent Transactions</Text>

                    <Image style={{ marginTop: 9, marginLeft: 20, }}
                        source={require('../../assets/Calendar.png')}
                    />

                </View>
            }


            {showComponent &&
                <View style={styles.maincontainer2}>

                    <View style={styles.container2}>

                        <View>
                            <Image style={{}}
                                source={require('../../assets/Airbnb.png')}
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
                                source={require('../../assets/Netflix.png')}
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
                                source={require('../../assets/Spotify.png')}
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
                                source={require('../../assets/Baskin.png')}
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
                                source={require('../../assets/marita.png')}
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
                                source={require('../../assets/mcdo.png')}
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
                                source={require('../../assets/BP.png')}
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
                <NewInputswithcolor label="Card Type" />

            }

            {showComponent2 &&
                <NewInputswithcolor label="Currency" />

            }
            {showComponent2 &&
                <NewInputswithcolor label="Due Balannce" />

            }
            {showComponent2 &&
                <NewInputswithcolor label="Account Holder Name" />

            }


            {showComponent2 &&
                <StopInputs label="Card Status" />

            }

            {showComponent2 &&
                <NewInputswithcolor label="Settlement Account" />

            }
            {showComponent2 &&
                <NewInputswithcolor label="Primary/Secondary" />

            }
            {showComponent2 &&
                <NewInputswithcolor label="Settlement Account" />

            }
            {showComponent2 &&
                <NewInputswithcolor label="Issued Date" />

            }
            {showComponent2 &&
                <NewInputswithcolor label="Expiry Date" />

            }
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

export default Buttonscompcards;