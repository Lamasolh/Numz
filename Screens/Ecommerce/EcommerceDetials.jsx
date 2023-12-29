import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { Image } from 'react-native';
import { Text } from 'react-native';
import { ScrollView } from 'react-native';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import { useNavigation } from '@react-navigation/native';
import Buttons from '../../Components/HomeComponents/GeneralComponents/Inputs/Button/Button';
import ButtonBorder from '../../Components/HomeComponents/GeneralComponents/Inputs/Button/ButtonBorder';

const EcommerceDetials = props => {
    const navigation = useNavigation()
    const [imgActive, setImgActive] = useState(0)


    const slides = [{
        key: '1',
        title: '$100,000',
        text: 'Say something',
        image: require('../../assets/slideimage.png'),
        image1: require('../../assets/slideimage2.png'),
        backgroundColor: 'red'
    },
    {
        key: '2',
        title: '$100,000',
        text: 'Say something',
        image: require('../../assets/slideimage.png'),
        image1: require('../../assets/slideimage2.png'),
        backgroundColor: 'red'
    },
    {
        key: '3',
        title: '$100,000',
        text: 'Say something',
        image: require('../../assets/slideimage.png'),
        image1: require('../../assets/slideimage2.png'),
        backgroundColor: 'red'
    },
    {
        key: '4',
        title: '$100,000',
        text: 'Say something',
        image: require('../../assets/slideimage.png'),
        image1: require('../../assets/slideimage2.png'),
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
                        onPress={() => navigation.navigate("Ecommerce")}
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
                                <View>
                                    <View style={{ top: 0, zIndex: -1, position: 'relative', }} key={index1}>
                                        <Image
                                            style={{ width: 409, height: 600 }}
                                            key={index1}
                                            source={e.image} />

                                    </View>
                                    <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', left: 82, top: 100 }}>
                                        <Image
                                            style={{ width: 209, height: 180 }}
                                            key={index1}
                                            source={e.image1} />
                                    </View>
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
                <View style={{ backgroundColor: 'white', borderRadius: 80, position: 'relative', top: -270 }}>
                    <View>
                        <Text style={{ padding: 30, fontSize: 27.38, fontWeight: 700 }}>
                            Dell Inspiron 15
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Image style={{ left: 30, top: -20 }}
                                    source={require('../../assets/stars.png')} />
                            </View>
                            <View style={{ flexDirection: 'column', top: -35, right: 30 }}>
                                <Text style={{ fontSize: 29.6, fontWeight: 700, color: '#06A283' }}>$359</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{ paddingLeft: 30, fontSize: 19.33, flex: 1, fontWeight: 700 }}>Description</Text>
                    <Text style={{ paddingLeft: 30, justifyContent: 'center', alignItems: 'center', padding: 15, fontSize: 12, lineHeight: 20.4, color: '#3B3B3B99' }}>Surround and loudspeaker with Bluetooth wireless connectivity that is paired with one or more smartphones, tablets, laptops or computers. Available in all type, including all color models. Listen your favourite music in epic surround sound around you.</Text>
                    <Text style={{ paddingLeft: 30, fontSize: 19.33, justifyContent: 'left', flex: 1, fontWeight: 700 }}>Reviews</Text>
                    <View style={{ paddingLeft: 30, flexDirection: 'row', position: 'relative', top: -25 }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                            <Image
                                style={{ justifyContent: 'center', alignItems: 'center' }}
                                source={require('../../assets/reveiws.png')} />
                        </View>
                        <View style={{ flexDirection: 'column', padding: 44, left: -25 }}>
                            <Text style={{ fontSize: 10, fontWeight: 400, color: 'black', lineHeight: 17, padding: 4 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean
                            </Text>
                        </View>

                    </View>
                    <View style={{ paddingLeft: 30, flexDirection: 'row', position: 'relative', top: -90 }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                            <Image
                                style={{ justifyContent: 'center', alignItems: 'center' }}
                                source={require('../../assets/reveiws.png')} />
                        </View>
                        <View style={{ flexDirection: 'column', padding: 44, left: -25 }}>
                            <Text style={{ fontSize: 10, fontWeight: 400, color: 'black', lineHeight: 17, padding: 4 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean
                            </Text>
                        </View>

                    </View>
                    <View style={{ padding: 20, flexDirection: 'row', top: -100, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column', width: 165 }}>
                       
                      
                      <TouchableOpacity  onPress={()=>navigation.navigate('Ecommerce')} style={{width:"100%", height:55,backgroundColor:"white"
                      ,borderWidth:4,borderColor:"#00A081",  borderRadius: 48,   marginTop: '25%',
                          justifyContent:"center",alignItems:"center"}}>

                          <Text style={{color:"#00A081",fontSize:16}}>Add to cart</Text>
                      </TouchableOpacity>
                   
                      </View>
                         
                 
                        <View style={{ flexDirection: 'column', width: 165 }}>
                        
                            <TouchableOpacity  onPress={()=>navigation.navigate('EcommerceCart')} style={{width:"100%", height:55,backgroundColor:"#00A081"
                            , borderRadius: 48,   marginTop: '25%',
                            justifyContent:"center",alignItems:"center"}}>

                          <Text style={{color:"white",fontSize:16}}>Buy</Text>
                         </TouchableOpacity>
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
        color: '#000000',
    },
    dot: {
        margin: 3,
        color: '#FFFFFF'
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
export default EcommerceDetials;