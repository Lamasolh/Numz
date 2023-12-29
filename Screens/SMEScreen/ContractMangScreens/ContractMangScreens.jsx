import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ContractManagComponents from "../../../Components/SMEComponents/ContractManagComponents/ContractManagComponents";
import ContractMangHeader from "../../../Components/SMEComponents/ContractManagComponents/ContractMangHeader";
import SMENavbar from "../../../Components/SMEComponents/SMENavbar";
const Contract = props => {
    return (
        <View>
           
            <ScrollView>
                <View style={styles.container}>

                <ContractMangHeader title="Contract Management" navigate="SMEHome" />
                    <ContractManagComponents name="Contract Name"/>
                    <ContractManagComponents name="Contract Name"/>
                    <ContractManagComponents name="Contract Name"/>
                    <ContractManagComponents name="Contract Name"/>
                    <ContractManagComponents name="Contract Name"/>
                  
                </View>
                <SMENavbar/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       
        padding: 23,
       
    }
})

export default Contract;