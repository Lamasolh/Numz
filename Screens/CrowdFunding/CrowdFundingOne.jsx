import React, { useState } from 'react'
import { Dimensions, StyleSheet } from 'react-native';
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
import AppIntroSlider from 'react-native-app-intro-slider';
import { SliderBox } from 'react-native-image-slider-box';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const CrowdFundingOne = props => {
    const [showSlider, setShowSlider] = useState(true)
    const [imgActive, setImgActive] = useState(0)


    const slides = [{
        key: '1',
        title: '$100,000',
        text: 'Say something',
        image: require('../../assets/line2.png'),
        backgroundColor: 'red'
    },
    {
        key: '2',
        title: '$100,000',
        text: 'Say something1',
        image: require('../../assets/line2.png'),
        backgroundColor: 'red'
    }
        , {
        key: '3',
        title: '$100,000',
        text: 'Say something2',
        image: require('../../assets/line2.png'),
        backgroundColor: 'red'
    },
    , {
        key: '4',
        title: '$100,000',
        text: 'Say something2',
        image: require('../../assets/line2.png'),
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
        <ScrollView style={{ backgroundColor: "white" }}>
            <View>
                <CrowdHeader title="Crowdfunding" />
                <View style={{ marginTop: 10 }}>
                    <Searchbar />
                </View>
                {/* <View style={{ padding: 15 }}>
                    <View style={styles.cardsicons}>
                        <Text style={{ position: 'absolute', padding: 10, top: 80, left: 20 }}><Text style={{ color: 'rgba(0, 160, 129, 1)',left:100 }}>
                            {desc} </Text>{desc1}</Text>

                        <SliderBox style={{
                            borderRadius: 30, marginTop: 80, right: 30
                        }} title={desc} images={images}
                            inactiveDotColor="#D9D9D9"
                            dotColor="black"
                            dotStyle={{ width: 10, height: 10, borderRadius: 5, marginLeft: -25 }} />
                       
                    </View>
                </View> */}
                <View style={{ padding: 20 }}>
                    <View style={styles.Homecontainer}>

                        <ScrollView

                            // style={{
                            //     borderRadius: 30, marginTop: 80, right: 30
                            // }} 
                            onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                            showsHorizantalScrollIndicator={true}
                            pagingEnabled
                            horizontal
                            style={styles.warp}
                        >

                            {slides.map((e, index) =>
                                <View>
                                    <View style={{ marginTop: 15, flexDirection: 'row' }}>
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
                                    </View>
                                    <Text style={{ marginTop: 20 }}><Text style={{ color: 'rgba(0, 160, 129, 1)' }} >{e.title}</Text> raised                                   <Text style={{ color: 'rgba(126, 126, 126, 1)', fontWeight: 600 }}>Forest Fire</Text></Text>
                                    <Image
                                        // style={{ marginTop: 150 }}
                                        key={index}
                                        source={e.image} />
                                </View>)}

                        </ScrollView>
                        <View style={styles.dotWarp}>
                            {slides.map((e, index) =>
                                <Text key={index} style={imgActive == index ? styles.dotActive : styles.dot}>
                                    ●
                                </Text>)}
                        </View>
                    </View>
                </View>
                <View style={{
                    flex: 1, width: "100%",
                    justifyContent: 'stretch', marginTop: 100
                }}>

                    <ScrollView horizontal={true} style={{ flex: 1, }}>

                        <View style={{ flexDirection: "row", height: 150, width: "100%" }}>
                            <Services navigate='Startups' title="Startups" imageUri={require("../../assets/plane.png")} />
                            <Services navigate='education' title="Education" imageUri={require("../../assets/education.png")} />
                            <Services navigate='health' title="Health" imageUri={require("../../assets/health.png")} />
                            <Services navigate='disasters' title="Disasters" imageUri={require("../../assets/disasters.png")} />
                            <Services navigate='Startups' title="Startups" imageUri={require("../../assets/plane.png")} />
                        </View>
                    </ScrollView>
                </View>
                <View style={{
                    flex: 1, width: "100%",
                    justifyContent: 'stretch',
                }}>
                    <Text style={{ paddingLeft: 16, paddingBottom: 10, fontSize: '17.24px', fontWeight: 700 }}>Recent</Text>
                    <ScrollView horizontal={true} style={{ flex: 1, }}>
                        <RecentCards image={require('../../assets/recent1.png')} title="Australia, Syndey" text="Sara broken legs and hips" text1="need surgery" text2="$100,000" text3="raised" />
                        <RecentCards image={require('../../assets/recent1.png')} title="India, Mumbia" text="Cancer treatement in need of" text1="white blood scells" text2="$100,000" text3="raised" />
                        <RecentCards image={require('../../assets/recent1.png')} title="Australia, Syndey" text="Sara broken legs and hips" text1="need surgery" text2="$100,000" text3="raised" />
                    </ScrollView>
                </View>
                <View style={{
                    flex: 1, width: "100%",
                    justifyContent: 'stretch',
                }}>
                    <Text style={{ paddingLeft: 16, paddingBottom: 10, fontSize: '17.24px', fontWeight: 700 }}>Disasters</Text>
                    <ScrollView horizontal={true} style={{ flex: 1, }}>
                        <RecentCards image={require('../../assets/recent1.png')} title="Australia, Syndey" text="Sara broken legs and hips" text1="need surgery" text2="$100,000" text3="raised" />
                        <RecentCards image={require('../../assets/recent1.png')} title="India, Mumbia" text="Cancer treatement in need of" text1="white blood scells" text2="$100,000" text3="raised" />
                        <RecentCards image={require('../../assets/recent1.png')} title="Australia, Syndey" text="Sara broken legs and hips" text1="need surgery" text2="$100,000" text3="raised" />
                    </ScrollView>
                </View>
                <SMENavbar />
            </View>
        </ScrollView>
    );

}
const styles = StyleSheet.create({
    Homecontainer: {
        marginTop: 10,
        justifyContent: 'center',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        }, borderRadius: 19.9,
        shadowOpacity: 0.25,
        shadowRadius: 4,

        backgroundColor: 'white',
        marginBottom: -100
    },
    warp: {
        marginHorizontal: -2,
        // margin: 30,
        //  paddingRight: 20,
        width: 320,
        height: 150
    },
    dotWarp: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
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
export default CrowdFundingOne