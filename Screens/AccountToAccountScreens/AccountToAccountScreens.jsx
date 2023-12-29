import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import BankingComponentsHeader from "../../Components/BankingComponents/BankingComponentsHeader";
import TransferList from '../../Components/TransferComponents/TransferList'
import SMENavbar from '../../Components/SMEComponents/SMENavbar';
import Inputwithwithoutbackgroundcolor from '../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithwithoutbackgroundcolor';
import Selectwithnobackground from '../../Components/HomeComponents/GeneralComponents/Inputs/Selects/Selectwithnobackground';
import AccountToAccountComponents from '../../Components/AccountToAccountComponents/AccountToAccountComponents';
import Convert from '../../Components/AccountToAccountComponents/Convert';
import AccToAccpopup from '../../Components/AccountToAccountComponents/AccToAccpopup';
const AccountTo = props => {

  return (
    <>

 
        <ScrollView>

        <View style={styles.container}>

            <BankingComponentsHeader title="Account to account"  navigate='TransferScreens'/>

            <Selectwithnobackground label="Account" title="From"/>
            <AccountToAccountComponents/>
            <Selectwithnobackground label="Account" title="To"/>
            <Convert/>
            <Selectwithnobackground label="Select Payment Method" title="More Details"/>
            <Inputwithwithoutbackgroundcolor label="Value Date"/>
            <Inputwithwithoutbackgroundcolor label="Purpose For Transfer"/>
            <AccToAccpopup title="Send"/>
      </View>

      <SMENavbar/>

      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding:30,
      
    }
    ,
  
})


export default AccountTo;