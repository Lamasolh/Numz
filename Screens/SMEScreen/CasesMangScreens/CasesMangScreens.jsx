import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ContractManagComponents from "../../../Components/SMEComponents/ContractManagComponents/ContractManagComponents";
import ContractMangHeader from "../../../Components/SMEComponents/ContractManagComponents/ContractMangHeader";
import SMENavbar from "../../../Components/SMEComponents/SMENavbar";
const Cases = props => {
    return (
        <View>
            <ScrollView>
                <View style={styles.container}>


                    <ContractMangHeader title="Cases Management" navigate="SMEHome" />
                    <ContractManagComponents name="Case Name"/>
                    <ContractManagComponents name="Case Name"/>
                    <ContractManagComponents name="Case Name"/>
                    <ContractManagComponents name="Case Name"/>
                    <ContractManagComponents name="Case Name"/> 
                  
                </View>
                <SMENavbar/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 25,
    }
})

export default Cases;