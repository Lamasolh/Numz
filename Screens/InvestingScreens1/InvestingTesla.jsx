import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import NewInputswithcolor from '../../Components/HomeComponents/GeneralComponents/Inputs/NewInputswithcolor';
import NavigationBottom from '../../Components/NavigationBottom/NavigationBottom';
import BankingComponentsHeader from '../../Components/BankingComponents/BankingComponentsHeader';
import StopInputs from '../../Components/HomeComponents/GeneralComponents/Inputs/Stopinput';
import Searchbar from '../../Components/HomeComponents/CardsSearchbar';
import Buttons from '../../Components/HomeComponents/GeneralComponents/Inputs/Button/Button';
import BigButton3 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3";
const InvestingTesla = props => {
    const [showComponent, setShowComponent] = useState(true)
    const [showComponent2, setShowComponent2] = useState(false)
    const [showComponent3, setShowComponent3] = useState(false)
    const [showComponent4, setShowComponent4] = useState(false)
    const [showComponent5, setShowComponent5] = useState(false)

    const [color, setcolor] = useState("white")
    const [color2, setcolor2] = useState("#00A081")
    const [bgcolor, bgsetcolor] = useState("#F3F3F300")
    const [color3, setcolor3] = useState("#8E8E8E")
    const [bgcolor2, bgsetcolor2] = useState("#F3F3F300")
    const [color4, setcolor4] = useState("#8E8E8E")
    const [bgcolor3, bgsetcolor3] = useState("#F3F3F300")
    const [color5, setcolor5] = useState("#8E8E8E")
    const [bgcolor4, bgsetcolor4] = useState("#F3F3F300")
    const [color6, setcolor6] = useState("#8E8E8E")

    return (
        <ScrollView>
            <View>
                <BankingComponentsHeader title="" navigate='InvestingScreens1' />
            </View>
            <View style={{ paddingLeft: 25 }}>
                <Text style={{ color: '#61616199', fontSize: 20, fontWeight: 600 }}><Text style={{ color: '#000000', fontSize: 20, fontWeight: 800 }}>Tesla Motors</Text>(TSLA)</Text>
            </View>
            <View style={{ paddingLeft: 25, flexDirection: 'row' }}>
                <View style={{ paddingLeft: 5, flexDirection: 'column' }}>
                    <Text style={{ fontSize: 23.06, fontWeight: 700, color: '#00A081' }}>1470.00</Text>
                </View>
                <View style={{ paddingLeft: 105, flexDirection: 'column' }}>
                    <Text style={{ color: '#00A081', fontSize: 20, fontWeight: 500 }}><Text style={{ color: '#8E8E8E', fontSize: 20, fontWeight: 500 }}>+230 </Text>(2.49%)</Text>

                </View>

            </View>
            <View style={{ padding: 30 }}>
                {showComponent && <Image source={require('../../assets/scale.png')} />}
            </View>
            <View style={{ padding: 30 }}>
                {showComponent2 && <></>}
            </View>
            <View style={{ padding: 30 }}>
                {showComponent3 && <Image source={require('../../assets/scale.png')} />}
            </View>
            <View style={{ padding: 30 }}>
                {showComponent4 && <></>}
            </View>
            <View style={{ padding: 30 }}>
                {showComponent5 && <></>}
            </View>

            <View style={{ flexDirection: 'row', padding: 20, justifyContent: 'space-around', marginTop: -270 }}>

                <View style={{ flexDirection: 'column', backgroundColor: color2, borderRadius: 28.39, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10 }}>
                    <TouchableOpacity onPress={() => {
                        setShowComponent(true)
                        setShowComponent2(false)
                        setShowComponent3(false)
                        setShowComponent4(false)
                        setShowComponent5(false)
                        setcolor('white')
                        setcolor2('#00A081')
                        bgsetcolor('#F3F3F300')
                        setcolor3('#8E8E8E')
                        bgsetcolor3('#F3F3F300')
                        setcolor5('#8E8E8E')

                    }}>
                        <Text style={{ fontSize: 15.97, fontWeight: 500, color: color }}>1D</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'column', backgroundColor: bgcolor, borderRadius: 28.39, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10 }}>
                    <TouchableOpacity onPress={() => {
                        setShowComponent(false)
                        setShowComponent2(true)
                        setShowComponent3(false)
                        setShowComponent4(false)
                        setShowComponent5(false)
                        setcolor('#8E8E8E')
                        setcolor2('#F3F3F300')
                        bgsetcolor('#00A081')
                        setcolor3('#FFFFFF')
                        bgsetcolor2('#F3F3F300')
                        setcolor4('#8E8E8E')
                        bgsetcolor3('#F3F3F300')
                        setcolor5('#8E8E8E')

                    }}>
                        <Text style={{ fontSize: 15.97, fontWeight: 500, color: color3 }}>1W</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'column', backgroundColor: bgcolor2, borderRadius: 28.39, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10 }}>
                    <TouchableOpacity onPress={() => {
                        setShowComponent(false)
                        setShowComponent2(false)
                        setShowComponent3(true)
                        setShowComponent4(false)
                        setShowComponent5(false)
                        setcolor('#8E8E8E')
                        setcolor2('#F3F3F300')
                        bgsetcolor('#F3F3F300')
                        setcolor3('#8E8E8E')
                        bgsetcolor3('#F3F3F300')
                        setcolor5('#8E8E8E')
                        bgsetcolor2('#00A081')
                        setcolor4('#FFFFFF')
                    }}>
                        <Text style={{ fontSize: 15.97, fontWeight: 500, color: color4 }}>1W</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'column', backgroundColor: bgcolor3, borderRadius: 28.39, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10 }}>

                    <TouchableOpacity onPress={() => {
                        setShowComponent(false)
                        setShowComponent2(false)
                        setShowComponent3(false)
                        setShowComponent4(true)
                        setShowComponent5(false)
                        setcolor('#8E8E8E')
                        setcolor2('#F3F3F300')
                        bgsetcolor('#F3F3F300')
                        setcolor3('#8E8E8E')
                        bgsetcolor2('#F3F3F300')
                        setcolor4('#8E8E8E')
                        bgsetcolor3('#00A081')
                        setcolor5('#FFFFFF')
                        bgsetcolor4('#F3F3F300')
                        setcolor6('#8E8E8E')

                    }}>
                        <Text style={{ fontSize: 15.97, fontWeight: 500, color: color5 }}>1W</Text>
                    </TouchableOpacity></View>
                <View style={{ flexDirection: 'column', backgroundColor: bgcolor4, borderRadius: 28.39, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10 }}>

                    <TouchableOpacity onPress={() => {
                        setShowComponent(false)
                        setShowComponent2(false)
                        setShowComponent3(false)
                        setShowComponent4(true)
                        setShowComponent5(false)
                        setcolor('#8E8E8E')
                        setcolor2('#F3F3F300')
                        bgsetcolor('#F3F3F300')
                        setcolor3('#8E8E8E')
                        bgsetcolor2('#F3F3F300')
                        setcolor4('#8E8E8E')
                        bgsetcolor2('#F3F3F300')
                        setcolor4('#8E8E8E')
                        bgsetcolor3('#F3F3F300')
                        setcolor5('#8E8E8E')

                        bgsetcolor4('#00A081')
                        setcolor6('#FFFFFF')
                    }}>
                        <Text style={{ fontSize: 15.97, fontWeight: 500, color: color6 }}>1W</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ paddingLeft: 25 }}>
                <Text style={{ fontSize: 19.52, fontWeight: 700 }}>About</Text>
                <Text style={{ color: '#00A081', fontWeight: 700 }}><Text style={{ fontSize: 15.97, fontWeight: 500, color: '#8E8E8E' }}>Nabil Bank Limited is a commercial bank in Nepal. Founded in 1984, the bank has branches across the nation and its head office in Kathmandu. </Text>
                    Read full bio </Text>
            </View>
            <View style={{ flexDirection: 'row', paddingLeft: 20, marginTop: 20 }}>
                <View style={{ flexDirection: 'column', paddingLeft: 5 }}>
                    <Image source={require('../../assets/location3.png')} />
                </View>
                <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 15.97, fontWeight: 500, color: color6 }}>Durbarmarg, Kathmandu</Text>
                   
                </View>
              
            </View>
            <View style={{  paddingLeft: 20,paddingRight: 20 ,marginTop:20,marginBottom:110}}>
            <BigButton3 title="Buy" navigate="Bitcoin"  />
            </View>
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


export default InvestingTesla;