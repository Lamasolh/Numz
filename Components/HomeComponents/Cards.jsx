import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { Image, StyleSheet, Text, View, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";

const Card = props => {
    const navigation = useNavigation();
    return (
        <>
            <ScrollView>
                <View style={{
                    flexDirection: 'column',
                    flex: 1,
                }}>
                    <View style={styles.container}>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <Image style={{}}
                                source={require('../../assets/homelogo.png')}
                            />

                        </View>
                        <View style={styles.container2}>
                            <View style={{ position: "absolute", top: 10, right: "95%", }}>

                                <Image style={{}}
                                    source={require('../../assets/profile.png')}
                                />
                            </View>
                            <View style={styles.greytextinput}>

                                <TextInput style={{ paddingLeft: 35 }}> </TextInput>

                                <Image style={{ position: "absolute", left: 10, top: 15 }}
                                    source={require('../../assets/search.png')}
                                />

                            </View>
                            <View style={styles.circlebill}>

                                <Image style={{}}
                                    source={require('../../assets/Vector.png')}
                                />
                            </View>

                        </View>

                    </View>

                    <View style={{ flex: 2, flexDirection: "row", justifyContent: 'space-between', padding: 10, marginTop: 50 }}>
                        <View style={{ borderColor: '#D8D8D86B', flex: 2, padding: 20, borderRadius: 10, borderColor: '#D8D8D86B', borderWidth: 2, height: 110 }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('SMEHome')}>
                                <Image source={require('../../assets/sme.png')} style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', top: '9%', left: '30%' }} />
                                <Image source={require('../../assets/smeback.png')} style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', top: '-2%', left: '15%' }} />
                                <Text style={{ textAlign: 'center' }}>SME's</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.3 }} />
                        <View style={{ borderColor: '#D8D8D86B', flex: 2, padding: 20, borderRadius: 10, borderColor: '#D8D8D86B', borderWidth: 2, height: 110 }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Banking')}>
                                <Image source={require('../../assets/banking.png')} style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', top: '10%', left: '27%' }} />
                                <Image source={require('../../assets/smeback.png')} style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', top: '1%', left: '15%' }} />
                                <Text style={{ textAlign: 'center' }}>Banking</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.3 }} />
                        <View style={{ borderColor: '#D8D8D86B', flex: 2, padding: 20, borderRadius: 10, borderColor: '#D8D8D86B', borderWidth: 2, height: 110 }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('InvestingScreens1')}>
                                <Image source={require('../../assets/investing.png')} style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', top: '25%', left: '23%' }} />
                                <Image source={require('../../assets/smeback.png')} style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', top: '1%', left: '15%' }} />
                                <Text style={{ textAlign: 'center' }}>Investing</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flex: 2, flexDirection: "row", justifyContent: 'space-between', padding: 10 }}>
                        <View style={{ borderColor: '#D8D8D86B', flex: 2, padding: 20, borderRadius: 10, borderColor: '#D8D8D86B', borderWidth: 2, height: 110 }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('InsuranceScreens1')}>
                                <Image source={require('../../assets/Insurance.png')} style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', top: '10%', left: '30%' }} />
                                <Image source={require('../../assets/smeback.png')} style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', top: '-2%', left: '15%' }} />
                                <Text style={{ textAlign: 'center' }}>Insurance</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.3 }} />
                        <TouchableOpacity
                            onPress={() => navigation.navigate('TelecomScreens1')}>
                            <View style={{ borderColor: '#D8D8D86B', flex: 2, padding: 20, borderRadius: 10, borderColor: '#D8D8D86B', borderWidth: 2, height: 110 }}>
                                <Image source={require('../../assets/Telecomm.png')} style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', top: '45%', left: '57%' }} />
                                <Image source={require('../../assets/smeback.png')} style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', top: '1%', left: '15%' }} />
                                <Text style={{ textAlign: 'center' }}>Telecomm</Text>


                            </View>
                        </TouchableOpacity>
                        <View style={{ flex: 0.3 }} />
                        <TouchableOpacity    onPress={() => navigation.navigate('LogisticScreens')} style={{ borderColor: '#D8D8D86B', flex: 2, padding: 20, borderRadius: 10, borderColor: '#D8D8D86B', borderWidth: 2, height: 110 }}>
                            <Image source={require('../../assets/Logistics.png')} style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', top: '50%', left: '50%' }} />
                            <Image source={require('../../assets/smeback.png')} style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', top: '1%', left: '15%' }} />
                            <Text style={{ textAlign: 'center' }}>Logistics</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ flex: 2, flexDirection: "row", justifyContent: 'space-between', padding: 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('MedicalScreens1')} style={{ borderColor: '#D8D8D86B', flex: 2, padding: 20, borderRadius: 10, borderColor: '#D8D8D86B', borderWidth: 2, height: 110 }}>
                            <Image source={require('../../assets/Medical.png')} style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', top: '40%', left: '55%' }} />
                            <Image source={require('../../assets/smeback.png')} style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', top: '-2%', left: '15%' }} />
                            <Text style={{ textAlign: 'center' }}>Medical</Text>
                        </TouchableOpacity>

                        <View style={{ flex: 0.3 }} />
                        <View style={{ borderColor: '#D8D8D86B', flex: 2, padding: 20, borderRadius: 10, borderColor: '#D8D8D86B', borderWidth: 2, height: 110 }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('EducationScreens')}>
                                <Image source={require('../../assets/Telecomm.png')} style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', top: '15%', left: '30%' }} />
                                <Image source={require('../../assets/smeback.png')} style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', top: '1%', left: '15%' }} />
                                <Text style={{ textAlign: 'center' }}>Education</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.3 }} />
                        <View style={{ borderColor: '#D8D8D86B', flex: 2, padding: 20, borderRadius: 10, borderColor: '#D8D8D86B', borderWidth: 2, height: 110 }}>
                            <Image source={require('../../assets/Business.png')} style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', top: '50%', left: '60%' }} />
                            <Image source={require('../../assets/smeback.png')} style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', top: '1%', left: '15%' }} />
                            <Text style={{ textAlign: 'center' }}>Business</Text>
                        </View>

                    </View>
                    <View style={{ flex: 2, flexDirection: "row", justifyContent: 'space-between', padding: 10 }}>
                        <View style={{ borderColor: '#D8D8D86B', flex: 2, padding: 20, borderRadius: 10, borderColor: '#D8D8D86B', borderWidth: 2, height: 110, width: 500 }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ecommerce')}>
                                <Image source={require('../../assets/sme.png')} style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', top: '11%', left: '33%' }} />
                                <Image source={require('../../assets/smeback.png')} style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', top: '-2%', left: '15%' }} />
                                <View style={{ width: 90, marginHorizontal: '-15%' }}>
                                    <Text style={{ textAlign: 'center' }}>E-Commerce</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.3 }} />
                        <View style={{ borderColor: '#D8D8D86B', flex: 2, padding: 20, borderRadius: 10, borderColor: '#D8D8D86B', borderWidth: 2, height: 110 }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('RealEstate')}>
                                <Image source={require('../../assets/Realestate.png')} style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', top: '10%', left: '30%' }} />
                                <Image source={require('../../assets/smeback.png')} style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', top: '1%', left: '15%' }} />
                                <View style={{ width: 90, marginHorizontal: '-15%' }}>
                                    <Text style={{ textAlign: 'center' }}>Real Estate</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.3 }} />
                        <View style={{ borderColor: '#D8D8D86B', flex: 2, padding: 20, borderRadius: 10, borderColor: '#D8D8D86B', borderWidth: 2, height: 110 }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Innovation')}>
                                <Image source={require('../../assets/Inovation.png')} style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', top: '10%', left: '27%' }} />
                                <Image source={require('../../assets/smeback.png')} style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', top: '1%', left: '15%' }} />
                                <Text style={{ textAlign: 'center' }}>Innovation</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 2, flexDirection: "row", justifyContent: 'space-between', padding: 10 }}>
                        <TouchableOpacity    onPress={() => navigation.navigate('EntertainmentScreeen1')} style={{ borderColor: '#D8D8D86B', flex: 2, padding: 20, borderRadius: 10, borderColor: '#D8D8D86B', borderWidth: 2, height: 110 }}>
                            <Image source={require('../../assets/Entertainment.png')} style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', top: '45%', left: '57%' }} />
                            <Image source={require('../../assets/smeback.png')} style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', top: '1%', left: '15%' }} />
                            <View style={{ width: 100, marginHorizontal: '-21%' }}>
                                <Text style={{ textAlign: 'center' }}>Entertainment</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ flex: 0.3 }} />
                        <View style={{ borderColor: '#D8D8D86B', flex: 2, padding: 20, borderRadius: 10, borderColor: '#D8D8D86B', borderWidth: 2, height: 110, width: 500 }}>
                            <Image source={require('../../assets/Loyaltypoints.png')} style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', top: '50%', left: '60%' }} />
                            <Image source={require('../../assets/smeback.png')} style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', top: '-2%', left: '15%' }} />
                            <View style={{ width: 100, marginHorizontal: '-15%' }}>
                                <Text style={{ textAlign: 'center' }}>Loyalty Points</Text>
                            </View>
                        </View>

                        <View style={{ flex: 0.3 }} />

                        <View style={{ borderColor: '#D8D8D86B', flex: 2, padding: 20, borderRadius: 10, height: 110 }}>
                            {/* <Image source={require('../../assets/Inovation.png')} style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', top: '40%', left: '58%' }} />
                    <Image source={require('../../assets/smeback.png')} style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', top: '1%', left: '15%' }} />
                    <Text style={{ textAlign: 'center' }}>Inovation</Text> */}
                        </View>

                    </View>
                </View>
            </ScrollView>

        </>
    );
}
const styles = StyleSheet.create({
    container1: {
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center'
    },
    card: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'red',

    },
    container: {
        padding: 35,
        backgroundColor: "#00A081",
    },

    container2: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        position: "relative"
    },

    greytextinput: {
        width: "85%",
        backgroundColor: "lightgrey",
        padding: 13,
        borderRadius: 20,
        position: "absolute",
        top: 15,
        left: "8%",

    },

    circlebill: {
        backgroundColor: "#FFFFFF",
        padding: 5,
        borderRadius: 15,
        position: "absolute",
        top: 20,
        left: "96%",
    },


})

export default Card;