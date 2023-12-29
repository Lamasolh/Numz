import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ContractManagComponents from "../../../Components/SMEComponents/ContractManagComponents/ContractManagComponents";
import RegisterLawyerComponents from "../../../Components/SMEComponents/RegisterLawyerComponents/RegisterLawyerComponents";
import SMENavbar from "../../../Components/SMEComponents/SMENavbar";
import ContractMangHeader from "../../../Components/SMEComponents/ContractManagComponents/ContractMangHeader";

const Reg = props => {
    return (
        <View>
            <ScrollView>
                <View style={styles.container}>
                    <ContractMangHeader title="Registered Lawyers" navigate="SMEHome" />
                    <RegisterLawyerComponents />
                    <RegisterLawyerComponents />
                    <RegisterLawyerComponents />
                </View>
                <SMENavbar />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 30,

    }
})

export default Reg;