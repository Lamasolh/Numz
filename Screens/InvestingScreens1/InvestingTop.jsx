import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import NewInputswithcolor from '../../Components/HomeComponents/GeneralComponents/Inputs/NewInputswithcolor';
import NavigationBottom from '../../Components/NavigationBottom/NavigationBottom';
import BankingComponentsHeader from '../../Components/BankingComponents/BankingComponentsHeader';
import StopInputs from '../../Components/HomeComponents/GeneralComponents/Inputs/Stopinput';
import Searchbar from '../../Components/HomeComponents/CardsSearchbar';
import { useNavigation } from '@react-navigation/native';
import Entertainmentsearch from '../../Components/EntertainmentComponents/Entertainmentsearch';
const InvestingTop = props => {
const navigation=useNavigation()

    const [showComponent, setShowComponent] = useState(true)
    const [showComponent2, setShowComponent2] = useState(false)

    const [color, setcolor] = useState("#00A081")
    const [color2, setcolor2] = useState("#9DB2AE")

    return (
        <ScrollView>
            <View style={{paddingLeft:20,paddingRight:20}}>
                <BankingComponentsHeader title="" navigate='InvestingScreens1' />
            </View>
            <View style={{ marginTop: 10 ,paddingLeft:20,paddingRight:20}}>
               {/* <Searchbar />*/}
                <Entertainmentsearch/>
            </View>
            <View style={styles.newcontainer}>
                <View style={{ flexDirection: 'column' }}>
                    <TouchableOpacity style={{

                        padding: 10,
                        backgroundColor: 'transparent',
                        justifyContent: "center",
                        alignItems: "center",
                        borderTopLeftRadius: 8,
                        borderBottomLeftRadius: 8,

                    }}
                        onPress={() => {
                            setShowComponent(true), setShowComponent2(false),
                                setcolor2("#9A9A9D")
                            setcolor("#00A081")
                        }}>


                        {color == "#00A081" ? <Text style={{ color: color, fontWeight: 600, fontSize: 17, marginBottom: -10 }} >Top10</Text> :
                            <Text style={{ color: color, fontWeight: 600, fontSize: 17, marginBottom: 80, paddingLeft: 30 }} >Top10</Text>}


                    </TouchableOpacity>
                    {color == "#00A081" ? <Image source={require('../../assets/underline.png')} /> : null}
                </View>
                <View style={{ flexDirection: 'column' }}>

                    <TouchableOpacity style={{


                        backgroundColor: 'transparent',
                        justifyContent: "center",
                        alignItems: "center",
                        borderTopLeftRadius: 8,
                        borderBottomLeftRadius: 8,

                    }}
                        onPress={() => {
                            setShowComponent(false), setShowComponent2(true),
                                setcolor2("#00A081")
                            setcolor("#9A9A9D")
                        }}>


                        {color2 == "#00A081" ? <Text style={{ color: color2, fontWeight: 600, fontSize: 17, marginBottom: -7, paddingRight: 10 }} >ALL</Text> :
                            <Text style={{ color: color2, fontWeight: 600, fontSize: 17, marginBottom: 70, paddingLeft: 15 }} >ALL</Text>}

                    </TouchableOpacity>
                    {color2 == "#00A081" ? <Image style={{}} source={require('../../assets/underline.png')} /> : null}
                </View>
            </View>


            {
                showComponent &&
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('InvestingTesla')}>
                        <View style={{ padding: 20, marginTop: -70 }}>
                            <View style={{ borderRadius: 10, borderColor: '#00000017', borderWidth: 1, padding: 15 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ flexDirection: 'column' }}>
                                                <Image source={require("../../assets/tesla.png")} />
                                            </View>
                                            <View style={{ flexDirection: 'column', padding: 3 }}>
                                                <Text style={{ fontSize: 12.6, fontWeight: 800 }}>Tesla Motors</Text>
                                                <Text style={{ fontSize: 12.13, fontWeight: 700, color: '#61616199' }} >TSLA</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'column', paddingLeft: 12 }}>
                                        <Text style={{ fontSize: 15.16, fontWeight: 800 }}>$910.54</Text>
                                        <View style={{ flexDirection: 'row' }} >
                                            <View style={{ backgroundColor: '#00A081', flexDirection: 'column', borderRadius: 3 }} >
                                                <Image source={require("../../assets/arrowup.png")} />
                                            </View>
                                            <View style={{ flexDirection: 'column' }}>
                                                <Text style={{ fontSize: 9.1, fontWeight: 800, paddingLeft: 5, color: '#00A081' }}>+15.5%</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Image style={{ position: 'absolute', }} source={require("../../assets/graphup.png")} />
                                        <Image style={{ position: 'absolute', top: 13, left: 6 }} source={require("../../assets/linegraph.png")} />

                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{ padding: 20, marginTop: -21 }}>
                        <View style={{ borderRadius: 10, borderColor: '#00000017', borderWidth: 1, padding: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Image source={require("../../assets/apple.png")} />
                                        </View>
                                        <View style={{ flexDirection: 'column', padding: 3 }}>
                                            <Text style={{ fontSize: 12.6, fontWeight: 800 }}>Apple Inc.</Text>
                                            <Text style={{ fontSize: 12.13, fontWeight: 700, color: '#61616199' }} >AAPL</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column', paddingLeft: 12 }}>
                                    <Text style={{ fontSize: 15.16, fontWeight: 800 }}>$148.32</Text>
                                    <View style={{ flexDirection: 'row' }} >
                                        <View style={{ backgroundColor: '#FF0000', width: 10, flexDirection: 'column', borderRadius: 3 }} >
                                            <Image style={{ justifyContent: 'center', paddingLeft: 10, paddingTop: 10 }} source={require("../../assets/arrowdown.png")} />
                                        </View>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Text style={{ fontSize: 9.1, fontWeight: 800, paddingLeft: 5, color: '#FF0000' }}>-1.5%</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Image style={{ position: 'absolute', top: 13, left: 19 }} source={require("../../assets/graphdown.png")} />
                                    <Image style={{ position: 'absolute', top: 20, left: 16 }} source={require("../../assets/linegraph.png")} />

                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ padding: 20, marginTop: -21 }}>
                        <View style={{ borderRadius: 10, borderColor: '#00000017', borderWidth: 1, padding: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Image source={require("../../assets/tesla.png")} />
                                        </View>
                                        <View style={{ flexDirection: 'column', padding: 3 }}>
                                            <Text style={{ fontSize: 12.6, fontWeight: 800 }}>Tesla Motors</Text>
                                            <Text style={{ fontSize: 12.13, fontWeight: 700, color: '#61616199' }} >TSLA</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column', paddingLeft: 12 }}>
                                    <Text style={{ fontSize: 15.16, fontWeight: 800 }}>$910.54</Text>
                                    <View style={{ flexDirection: 'row' }} >
                                        <View style={{ backgroundColor: '#00A081', flexDirection: 'column', borderRadius: 3 }} >
                                            <Image source={require("../../assets/arrowup.png")} />
                                        </View>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Text style={{ fontSize: 9.1, fontWeight: 800, paddingLeft: 5, color: '#00A081' }}>+15.5%</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Image style={{ position: 'absolute', }} source={require("../../assets/graphup.png")} />
                                    <Image style={{ position: 'absolute', top: 13, left: 6 }} source={require("../../assets/linegraph.png")} />

                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ padding: 20, marginTop: -21 }}>
                        <View style={{ borderRadius: 10, borderColor: '#00000017', borderWidth: 1, padding: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Image source={require("../../assets/apple.png")} />
                                        </View>
                                        <View style={{ flexDirection: 'column', padding: 3 }}>
                                            <Text style={{ fontSize: 12.6, fontWeight: 800 }}>Apple Inc.</Text>
                                            <Text style={{ fontSize: 12.13, fontWeight: 700, color: '#61616199' }} >AAPL</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column', paddingLeft: 12 }}>
                                    <Text style={{ fontSize: 15.16, fontWeight: 800 }}>$148.32</Text>
                                    <View style={{ flexDirection: 'row' }} >
                                        <View style={{ backgroundColor: '#FF0000', width: 10, flexDirection: 'column', borderRadius: 3 }} >
                                            <Image style={{ justifyContent: 'center', paddingLeft: 10, paddingTop: 10 }} source={require("../../assets/arrowdown.png")} />
                                        </View>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Text style={{ fontSize: 9.1, fontWeight: 800, paddingLeft: 5, color: '#FF0000' }}>-1.5%</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Image style={{ position: 'absolute', top: 13, left: 19 }} source={require("../../assets/graphdown.png")} />
                                    <Image style={{ position: 'absolute', top: 20, left: 16 }} source={require("../../assets/linegraph.png")} />

                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ padding: 20, marginTop: -21 }}>
                        <View style={{ borderRadius: 10, borderColor: '#00000017', borderWidth: 1, padding: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Image source={require("../../assets/tesla.png")} />
                                        </View>
                                        <View style={{ flexDirection: 'column', padding: 3 }}>
                                            <Text style={{ fontSize: 12.6, fontWeight: 800 }}>Tesla Motors</Text>
                                            <Text style={{ fontSize: 12.13, fontWeight: 700, color: '#61616199' }} >TSLA</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column', paddingLeft: 12 }}>
                                    <Text style={{ fontSize: 15.16, fontWeight: 800 }}>$910.54</Text>
                                    <View style={{ flexDirection: 'row' }} >
                                        <View style={{ backgroundColor: '#00A081', flexDirection: 'column', borderRadius: 3 }} >
                                            <Image source={require("../../assets/arrowup.png")} />
                                        </View>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Text style={{ fontSize: 9.1, fontWeight: 800, paddingLeft: 5, color: '#00A081' }}>+15.5%</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Image style={{ position: 'absolute', }} source={require("../../assets/graphup.png")} />
                                    <Image style={{ position: 'absolute', top: 13, left: 6 }} source={require("../../assets/linegraph.png")} />

                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ padding: 20, marginTop: -21 }}>
                        <View style={{ borderRadius: 10, borderColor: '#00000017', borderWidth: 1, padding: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Image source={require("../../assets/apple.png")} />
                                        </View>
                                        <View style={{ flexDirection: 'column', padding: 3 }}>
                                            <Text style={{ fontSize: 12.6, fontWeight: 800 }}>Apple Inc.</Text>
                                            <Text style={{ fontSize: 12.13, fontWeight: 700, color: '#61616199' }} >AAPL</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column', paddingLeft: 12 }}>
                                    <Text style={{ fontSize: 15.16, fontWeight: 800 }}>$148.32</Text>
                                    <View style={{ flexDirection: 'row' }} >
                                        <View style={{ backgroundColor: '#FF0000', width: 10, flexDirection: 'column', borderRadius: 3 }} >
                                            <Image style={{ justifyContent: 'center', paddingLeft: 10, paddingTop: 10 }} source={require("../../assets/arrowdown.png")} />
                                        </View>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Text style={{ fontSize: 9.1, fontWeight: 800, paddingLeft: 5, color: '#FF0000' }}>-1.5%</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Image style={{ position: 'absolute', top: 13, left: 19 }} source={require("../../assets/graphdown.png")} />
                                    <Image style={{ position: 'absolute', top: 20, left: 16 }} source={require("../../assets/linegraph.png")} />

                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ padding: 20, marginTop: -21 }}>
                        <View style={{ borderRadius: 10, borderColor: '#00000017', borderWidth: 1, padding: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Image source={require("../../assets/tesla.png")} />
                                        </View>
                                        <View style={{ flexDirection: 'column', padding: 3 }}>
                                            <Text style={{ fontSize: 12.6, fontWeight: 800 }}>Tesla Motors</Text>
                                            <Text style={{ fontSize: 12.13, fontWeight: 700, color: '#61616199' }} >TSLA</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column', paddingLeft: 12 }}>
                                    <Text style={{ fontSize: 15.16, fontWeight: 800 }}>$910.54</Text>
                                    <View style={{ flexDirection: 'row' }} >
                                        <View style={{ backgroundColor: '#00A081', flexDirection: 'column', borderRadius: 3 }} >
                                            <Image source={require("../../assets/arrowup.png")} />
                                        </View>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Text style={{ fontSize: 9.1, fontWeight: 800, paddingLeft: 5, color: '#00A081' }}>+15.5%</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Image style={{ position: 'absolute', }} source={require("../../assets/graphup.png")} />
                                    <Image style={{ position: 'absolute', top: 13, left: 6 }} source={require("../../assets/linegraph.png")} />

                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            }


            {/* {
                showComponent2 &&
                <NewInputswithcolor label="Card Type" />

            } */}

            <NavigationBottom />
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


export default InvestingTop;