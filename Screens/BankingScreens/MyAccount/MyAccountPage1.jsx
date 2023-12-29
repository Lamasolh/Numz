import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import SMEHeader from '../../../Components/SMEComponents/SMEHeader'
import SMEList from '../../../Components/SMEComponents/SMEList'
import SMENavbar from '../../../Components/SMEComponents/SMENavbar';
import Card from '../../../Components/BankingComponents/Card';
import NavigationBottom from '../../../Components/NavigationBottom/NavigationBottom';
import { useNavigation } from '@react-navigation/native';
const Page1 = props => {
    const navigation = useNavigation()
    return (
        <>

            <View>
                <ScrollView>
                    <SMEHeader title="My Account" navigate="Banking" />
                    <View style={{
                        flexDirection: 'column',
                        flex: 1,
                        padding: 25
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: 600 }}>Accounts</Text>
                    </View>
                    <View style={{ padding: 20 }}>
                      
                            <Card one="Current Account - Payroll External"
                                two="54156126545415612654" three="$14,000" />
               
                        <Card one="Current Account - Payroll External"
                            two="54156126545415612654" three="$14,000" />
                        <Card one="Current Account - Payroll External"
                            two="54156126545415612654" three="$14,000" />
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('List')}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center',marginBottom:29 }}>
                            <Text style={{ marginTop: 5, color: 'rgba(0, 160, 129, 1)', fontWeight: 600, fontSize: 16 }}>Create Bank Account  </Text>
                            <View><Image source={require('../../../assets/cardi1.png')} /></View>
                        </View>
                    </TouchableOpacity>
                    <SMENavbar/>
                </ScrollView>
            
            </View>
        </>
    );
}

export default Page1;