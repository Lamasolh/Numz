import React, { useState } from 'react';
import { ActivityIndicator, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Inputs from '../../Components/HomeComponents/GeneralComponents/Inputs/Inputs';
import Select from '../../Components/HomeComponents/GeneralComponents/Inputs/Selects/Select';
import Buttons from '../../Components/HomeComponents/GeneralComponents/Inputs/Button/Button';

import NavigationBottom from '../../Components/NavigationBottom/NavigationBottom';
import SMEHeader from '../../Components/SMEComponents/SMEHeader';
import { useNavigation } from '@react-navigation/native';
import BigButton3 from '../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
const SME = props => {
    const navigation = useNavigation()

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <View>
                <ScrollView>
                    <View style={styles.container}>
                        <SMEHeader title="Register a company" navigate="SMEHome" />
                        <Inputs label="Name" type="email-address" />
                        <Inputs label="Email" type="numeric" />
                        <Inputs label="Phone Number" />
                        <Select label="Business Structure" />
                        <Inputs label="Number of Employees" />
                        <Inputs label="Business Name" />
                        <Select label="Business Industry" />
                        <View style={{ marginTop: 130, justifyContent: 'center', textAlign: 'center', backgroundColor: '#00A081', height: 50, borderRadius: 48 }}>
                            <TouchableOpacity

                                onPress={
                                    () => { setModalVisible(true), setTimeout(() => { navigation.navigate('SMEHome') }, 2000) }
                                }>
                                <Text style={{ justifyContent: 'center', textAlign: 'center', fontSize: 17, fontWeight: 500, color: 'white' }}>Register</Text>
                                {/* <BigButton3 title="Register" /> */}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <SMENavbar />
                </ScrollView>

            </View>
            <TouchableOpacity
                style={{ width: "100%", }}

                onPress={
                    () => { setModalVisible(false), setTimeout(() => { navigation.navigate('Innovation') }, 2000) }
                }>
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"

                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                        }}>



                        <View style={styles.centeredView}>

                            <View style={styles.modalView}>
                                <Image style={{}}
                                    source={require('../../assets/popup.png')}
                                />

                                <View style={styles.congrats}>

                                    <Text style={{ fontSize: 23, fontWeight: "bold", color: "#00A081" }}>Congratulations!</Text>

                                </View>

                                <View style={styles.congrats}>

                                    <Text style={{ textAlign: "center" }}>You have have applied for the Mentorship & Guidance program. You will be redirected to the
                                        SME Homepage.</Text>

                                </View>

                                <View style={{ padding: 30 }}>
                                    <ActivityIndicator size="larger" color="#3AE180" style={styles.loading}>
                                    </ActivityIndicator>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>

            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 25,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 52,
    },

    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        width: "80%",
        height: 500,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
    ,


})

export default SME;