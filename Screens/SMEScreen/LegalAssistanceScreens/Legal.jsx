import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking, ScrollView } from 'react-native';
import SMEHeader from '../../../Components/SMEComponents/SMEHeader'
import SMENavbar from '../../../Components/SMEComponents/SMENavbar';
import Inputs from '../../../Components/HomeComponents/GeneralComponents/Inputs/Inputs';
import Buttons from '../../../Components/HomeComponents/GeneralComponents/Inputs/Button/Button';
import BigButton3 from '../../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3';
const Legal = props => {

    return (
        <>

            <View>
                <ScrollView>
                    <SMEHeader title="Legal Assistance" navigate="SMEHome" />
                    <View style={{
                        flexDirection: 'column',
                        flex: 1,
                        padding: 25
                    }}>


                        <Inputs label="Name" />
                        <Inputs label="Email" type="email-address" />
                        <Inputs label="Name" />
                        <Inputs label="Name" />
                        <Inputs label="Name" />
                        <Inputs label="Name" />
                        <Inputs label="Name" />
                        <BigButton3 title="Register" />

                    </View>

                </ScrollView>
                <View style={{ marginTop: 65 }}>
                    <SMENavbar />
                </View>
            </View>
        </>
    );
}

export default Legal;