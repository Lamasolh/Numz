import React, { useState } from 'react'
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { Image } from 'react-native';
import { Text } from 'react-native';
import Services from '../../Components/CrowdFunding/Services';
import { ScrollView } from 'react-native';
import RecentCards from '../../Components/CrowdFunding/RecentCards';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import CrowdHeaderDetails from '../../Components/CrowdFunding/CrowdHeaderDetails';
import SlideGrid from './SlideGrid';
import { useNavigation } from '@react-navigation/native';
import { TextComponent } from 'react-native';

const CrowdFundingDetials = props => {
    const navigation = useNavigation()
    const [imgActive, setImgActive] = useState(0)


    const slides = [{
        key: '1',
        title: '$100,000',
        text: 'Say something',
        image: require('../../assets/slide1.png'),
        backgroundColor: 'red'
    },
    {
        key: '2',
        title: '$100,000',
        text: 'Say something1',
        image: require('../../assets/slide1.png'),
        backgroundColor: 'red'
    }
        , {
        key: '3',
        title: '$100,000',
        text: 'Say something2',
        image: require('../../assets/slide1.png'),
        backgroundColor: 'red'
    },
        , {
        key: '4',
        title: '$100,000',
        text: 'Say something2',
        image: require('../../assets/slide1.png'),
        backgroundColor: 'red'
    },
    ]

    const onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if (slide != imgActive) {
                setImgActive(slide);
            }
        }
    }


    return (
        <ScrollView >
            <View>
                <View style={{ top: 20, zIndex: 3, position: 'absolute' }}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("CrowdFunding")}
                    >

                        <Image style={{}}
                            source={require('../../assets/arrowblack.png')}
                        />

                    </TouchableOpacity>
                </View>
                <View >
                    <View style={styles.Homecontainer}>

                        <ScrollView
                            onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                            showsHorizantalScrollIndicator={true}
                            pagingEnabled
                            horizontal
                            style={styles.warp}
                        >

                            {slides.map((e, index1) =>
                                <View style={{ top: 0, zIndex: -1, position: 'relative', }} key={index1}>
                                    {/* <View style={{ marginTop: 15, flexDirection: 'row' }}>
                                        <View style={{ marginTop: 15, flexDirection: 'column', }}>

                                            <Text style={{ fontWeight: 700, fontSize: 14 }}>Keep up to date with your </Text>
                                            <Text style={{ fontWeight: 700, fontSize: 14 }}>campaigns and the campaigns  </Text>
                                            <Text style={{ fontWeight: 700, fontSize: 14 }}>you have donated to.</Text>
                                        </View>
                                        <View style={{ marginTop: 15, padding: 5, flexDirection: 'column' }}>
                                            <View style={{ width: 80, backgroundColor: 'rgba(227, 245, 241, 1)', borderRadius: 48, }}>
                                                <Button title="View" color="rgba(0, 160, 129, 1)" style={{ fontSize: '10px' }} />
                                            </View>
                                        </View>
                                    </View> */}
                                    {/* <Text style={{ marginTop: 20 }}><Text style={{ color: 'rgba(0, 160, 129, 1)' }} >{e.title}</Text> raised                                   <Text style={{ color: 'rgba(126, 126, 126, 1)', fontWeight: 600 }}>Forest Fire</Text></Text> */}

                                    <Image
                                        style={{ width: 409, height: 600 }}
                                        key={index1}
                                        source={e.image} />
                                </View>)}

                        </ScrollView>
                        <View style={styles.dotWarp}>
                            {slides.map((e, index) =>
                                <Text key={index} style={imgActive == index ? styles.dotActive : styles.dot}>
                                    ●
                                </Text>)}
                        </View>

                        <ScrollView horizontal={true} style={{ position: 'relative', top: -250 }}>

                            <View style={{ flexDirection: "row", height: 150, width: "80%" }}>
                                <SlideGrid navigate='Startups' imageUri={require("../../assets/slides1.png")} />
                                <SlideGrid navigate='education' imageUri={require("../../assets/slides2.png")} />
                                <SlideGrid navigate='health' imageUri={require("../../assets/slides1.png")} />
                                <SlideGrid navigate='CrowdFundingTwo' imageUri={require("../../assets/slides2.png")} />
                                <SlideGrid navigate='Startups' imageUri={require("../../assets/slides1.png")} />
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={{ backgroundColor: 'white', borderRadius: 80, position: 'relative', top: -270 }}>
                    <View style={{
                        justifyContent: 'center', alignItems: 'center'
                    }}>

                        <Text style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center', padding: 30, fontSize: 27.38, fontWeight: 700 }}>
                            Fire Tornado
                        </Text>
                        <Image
                            style={{ width: '80%', height: 50, justifyContent: 'center', alignItems: 'center' }}
                            source={require('../../assets/line3.png')} />
                        <View style={{position: 'relative', flexDirection: 'row',paddingRight:100 }}>
                            <Image
                                style={{ justifyContent: 'center', alignItems: 'center' }}
                                source={require('../../assets/sara.png')} />
                            <Image
                                style={{ right:10,justifyContent: 'center', alignItems: 'center' }}
                                source={require('../../assets/sara.png')} />
                            <Image
                                style={{right:20, justifyContent: 'center', alignItems: 'center' }}
                                source={require('../../assets/sara.png')} />
                            <Text style={{ fontSize: 12,right:20,padding:10,color:'#696969' }}>120+ donated</Text>
                        </View>
                        <View style={{ flexDirection: 'row', position: 'relative', paddingTop: 10 }}>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                                <Image
                                    style={{ justifyContent: 'center', alignItems: 'center' }}
                                    source={require('../../assets/sara.png')} />

                                <Text style={{ fontSize: 9.8, color: '#929292', padding: 10 }}>Sarah Smith</Text>
                            </View>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                                <Image
                                    style={{ justifyContent: 'center', alignItems: 'center' }}
                                    source={require('../../assets/location1.png')} />
                                <Text style={{ fontSize: 9.8, color: '#929292', padding: 10 }}>Australia, Sydney</Text>
                            </View>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                                <Image
                                    style={{ justifyContent: 'center', alignItems: 'center' }}
                                    source={require('../../assets/fire.png')} />
                                <Text style={{ fontSize: 9.8, color: '#929292', padding: 10 }}>Fire Disaster</Text>
                            </View>

                        </View>

                    </View>

                    <Text style={{ paddingLeft: 30, fontSize: 19.33, flex: 1, fontWeight: 700 }}>Description</Text>
                    <Text style={{ paddingLeft: 30, justifyContent: 'center', alignItems: 'center', padding: 20, fontSize: 10, color: '#000000' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean em ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean em ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean em ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean </Text>
                    <Text style={{ paddingLeft: 30, fontSize: 19.33,flex: 1, fontWeight: 700 }}>Donations</Text>
                    <View style={{ paddingLeft: 30, flexDirection: 'row', position: 'relative', paddingTop: 10 }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                            <Image
                                style={{ justifyContent: 'center',  alignItems: 'center' }}
                                source={require('../../assets/pro.png')} />
                        </View>
                        <View style={{ flexDirection: 'column', padding: 4 }}>
                            <Text style={{ fontSize: 15, fontWeight: 700, color: 'black', padding: 4 }}>John Smith</Text>
                            <Text style={{ color: '#A3A3A3', fontSize: 13 }}> <Text style={{ fontSize: 14, fontWeight: 400, color: 'black', padding: 1 }}>23$</Text>    .   21 minutes ago</Text>
                            <Text style={{ fontSize: 14, fontWeight: 400, color: 'black', padding: 4 }}>Sending you all the love!</Text>
                        </View>

                    </View>
                    <View style={{ paddingLeft: 30, flexDirection: 'row', position: 'relative', paddingTop: 10, marginBottom: 200 }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                            <Image
                                style={{ justifyContent: 'center',  alignItems: 'center' }}
                                source={require('../../assets/pro.png')} />
                        </View>
                        <View style={{ flexDirection: 'column', padding: 4 }}>
                            <Text style={{ fontSize: 15, fontWeight: 700, color: 'black', padding: 4 }}>John Smith</Text>
                            <Text style={{ color: '#A3A3A3', fontSize: 13 }}> <Text style={{ fontSize: 14, fontWeight: 400, color: 'black', padding: 1 }}>23$</Text>    .   21 minutes ago</Text>
                            <Text style={{ fontSize: 14, fontWeight: 400, color: 'black', padding: 4 }}>Sending you all the love!</Text>
                        </View>

                    </View>
                </View>
                <View style={{ marginTop: -290 }}>
                    <SMENavbar />
                </View>
            </View>

        </ScrollView>
    );
}
const styles = StyleSheet.create({
    Homecontainer: {

        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        }, borderRadius: 19.9,
        shadowOpacity: 0.25,
        shadowRadius: 4,

    },
    warp: {
        marginHorizontal: -2,
        // margin: 30,
        //  paddingRight: 20,
        width: 420,
        height: 650
    },
    dotWarp: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center',
        top: 350
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
        // marginLeft: "10%",
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
export default CrowdFundingDetials;